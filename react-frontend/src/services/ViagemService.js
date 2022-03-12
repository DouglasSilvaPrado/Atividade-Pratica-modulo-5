import axios from "axios";

const VIAGEM_API_URL = "http://localhost:8080/api/v1/viagens"

class ViagemService {

    getViagens(){
        return axios.get(VIAGEM_API_URL);
    }

    createViagem(viagem){
        return axios.post(VIAGEM_API_URL, viagem);
    }

    getViagemById(viagemId){
        return axios.get(VIAGEM_API_URL + '/' + viagemId);
    }

    updateViagem(viagem, viagemId){
        return axios.put(VIAGEM_API_URL + '/' + viagemId, viagem);
    }

    deleteViagem(viagemId){
        return axios.delete(VIAGEM_API_URL + '/' + viagemId);
    }
}

export default new ViagemService();