import axios from 'axios';

const PESSOA_API_BASE_URL = "http://localhost:8080/api/v1/pessoas";

class PessoaService {

    getPessoas(){
        return axios.get(PESSOA_API_BASE_URL);
    }

    createPessoa(pessoa){
        return axios.post(PESSOA_API_BASE_URL, pessoa);
    }

    getPessoaById(pessoaId){
        return axios.get(PESSOA_API_BASE_URL + '/' + pessoaId);
    }

    updatePessoa(pessoa, pessoaId){
        return axios.put(PESSOA_API_BASE_URL + '/' + pessoaId, pessoa);
    }

    deletePessoa(pessoaId){
        return axios.delete(PESSOA_API_BASE_URL + '/' + pessoaId);
    }
}

export default new PessoaService()