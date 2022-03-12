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
import net.guides.springboot.crud.model.Viagem;
import net.guides.springboot.crud.repository.ViagemRepository;
import net.guides.springboot.crud.service.SequenceGeneratorService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ViagemController {	
	@Autowired
	private ViagemRepository viagemRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@GetMapping("/viagens")
	public List<Viagem> getAllViagems(){
		return viagemRepository.findAll();
	}
	
	@GetMapping("/viagens/{id}")
	public ResponseEntity<Viagem> getViagemById(@PathVariable(value = "id") Long viagemId)
			throws ResourceNotFoundException {
		Viagem viagem = viagemRepository.findById(viagemId)
				.orElseThrow(() -> new ResourceNotFoundException("Viagem not found for this id :: " + viagemId));
		return ResponseEntity.ok().body(viagem);
	}
	
	@PostMapping("/viagens")
	public Viagem createViagem(@Valid @RequestBody Viagem viagem) {
		viagem.setId(sequenceGeneratorService.generateSequence(Viagem.SEQUENCE_NAME));
		return viagemRepository.save(viagem);
	}
	
	@PutMapping("/viagens/{id}")
	public ResponseEntity<Viagem> updateViagem(@PathVariable(value = "id") Long viagemId,
			@Valid @RequestBody Viagem viagemDetails) throws ResourceNotFoundException {
		Viagem viagem = viagemRepository.findById(viagemId)
				.orElseThrow(() -> new ResourceNotFoundException("Viagem not found for this id :: " + viagemId));

		viagem.setOrigem(viagemDetails.getOrigem());
		viagem.setDestino(viagemDetails.getDestino());
		viagem.setDataIda(viagemDetails.getDataIda());
		viagem.setDataVolta(viagemDetails.getDataVolta());
		final Viagem updatedViagem = viagemRepository.save(viagem);
		return ResponseEntity.ok(updatedViagem);
	}
	
	@DeleteMapping("/viagens/{id}")
	public Map<String, Boolean> deleteViagem(@PathVariable(value = "id") Long viagemId)
			throws ResourceNotFoundException {
		Viagem viagem = viagemRepository.findById(viagemId)
				.orElseThrow(() -> new ResourceNotFoundException("Viagem not found for this id :: " + viagemId));

		viagemRepository.delete(viagem);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	
	
	
	
	
}
