package net.guides.springboot.crud.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.guides.springboot.crud.exception.ResourceNotFoundException;
import net.guides.springboot.crud.model.Pessoa;
import net.guides.springboot.crud.repository.PessoaRepository;
import net.guides.springboot.crud.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PessoaController {
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/pessoas")
	public List<Pessoa> getAllPessoas() {
		return pessoaRepository.findAll();
	}

	@GetMapping("/pessoas/{id}")
	public ResponseEntity<Pessoa> getPessoaById(@PathVariable(value = "id") Long pessoaId)
			throws ResourceNotFoundException {
		Pessoa pessoa = pessoaRepository.findById(pessoaId)
				.orElseThrow(() -> new ResourceNotFoundException("Pessoa not found for this id :: " + pessoaId));
		return ResponseEntity.ok().body(pessoa);
	}

	@PostMapping("/pessoas")
	public Pessoa createPessoa(@Valid @RequestBody Pessoa pessoa) {
		pessoa.setId(sequenceGeneratorService.generateSequence(Pessoa.SEQUENCE_NAME));
		return pessoaRepository.save(pessoa);
	}

	@PutMapping("/pessoas/{id}")
	public ResponseEntity<Pessoa> updatePessoa(@PathVariable(value = "id") Long pessoaId,
			@Valid @RequestBody Pessoa pessoaDetails) throws ResourceNotFoundException {
		Pessoa pessoa = pessoaRepository.findById(pessoaId)
				.orElseThrow(() -> new ResourceNotFoundException("Pessoa not found for this id :: " + pessoaId));

		pessoa.setCpf(pessoaDetails.getCpf());
		pessoa.setNome(pessoaDetails.getNome());
		pessoa.setTelefone(pessoaDetails.getTelefone());
		final Pessoa updatedPessoa = pessoaRepository.save(pessoa);
		return ResponseEntity.ok(updatedPessoa);
	}

	@DeleteMapping("/pessoas/{id}")
	public Map<String, Boolean> deletePessoa(@PathVariable(value = "id") Long pessoaId)
			throws ResourceNotFoundException {
		Pessoa pessoa = pessoaRepository.findById(pessoaId)
				.orElseThrow(() -> new ResourceNotFoundException("Pessoa not found for this id :: " + pessoaId));

		pessoaRepository.delete(pessoa);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
