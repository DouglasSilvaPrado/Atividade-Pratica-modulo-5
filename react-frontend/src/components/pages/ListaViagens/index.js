import React, { Component } from 'react'
import ViagemService from '../../../services/ViagemService'

class ListaViagens extends Component {
    constructor(props) {
        super(props)

        this.state = {
                viagens:[]
        }
        this.addViagem = this.addViagem.bind(this);
        this.editViagem = this.editViagem.bind(this);
        this.deleteViagem = this.deleteViagem.bind(this);
    }

    deleteViagem(id){
        ViagemService.deleteViagem(id).then( res => {
            this.setState({viagens: this.state.viagens.filter(viagen => viagen.id !== id)});
        });
    }
    viewViagem(id){
        this.props.history.push(`/view-viagem/${id}`);
    }
    editViagem(id){
        this.props.history.push(`/add-viagem/${id}`);
    }

    componentDidMount(){
        ViagemService.getViagens().then((res) => {
            this.setState({ viagens: res.data});
            console.log(res.data)
        });
    }

    addViagem(){
        this.props.history.push('/add-viagem/_add');
    }

    render() {
        return (
            <div className='alturaTela my-3 container'>
                 <h1 className="text-center">Suas Viagens</h1>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addViagem}> Nova Viagem</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Origem</th>
                                    <th> Destino</th>
                                    <th> Data Ida</th>
                                    <th> Data Volta</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.viagens.map(
                                        viagem => 
                                        <tr key = {viagem.id}>
                                             <td> {viagem.origem} </td>   
                                             <td> {viagem.destino}</td>
                                             <td> {viagem.dataIda}</td>
                                             <td> {viagem.dataVolta}</td>
                                             <td>
                                                 <button onClick={ () => this.editViagem(viagem.id)} className="btn btn-primary">Editar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteViagem(viagem.id)} className="btn btn-danger btn-tb">Excluir </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewViagem(viagem.id)} className="btn btn-primary btn-tb">Detalhes </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListaViagens
