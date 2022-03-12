import React, { Component } from 'react'
import ViagemService from '../../../services/ViagemService'

class DetalhesViagem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            viagem: {}
        }
    }

    componentDidMount(){
        ViagemService.getViagemById(this.state.id).then( res => {
            this.setState({viagem: res.data});
        })
    }

    cancel(){
        this.props.history.push('/viagens');
    }

    render() {
        return (
            <div className='alturaTela'>
                <br></br>
                <div className = "card col-md-6 offset-md-3 text-center">
                    <h3 className = "primary-color"> Detalhes da Viagem</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Origem: </label>
                            <div> { this.state.viagem.origem }</div>
                        </div>
                        <div className = "row">
                            <label> Destino: </label>
                            <div> { this.state.viagem.destino }</div>
                        </div>
                        <div className = "row">
                            <label> Data de Ida: </label>
                            <div> { this.state.viagem.dataIda }</div>
                        </div>
                        <div className = "row">
                            <label> Data de Volta: </label>
                            <div> { this.state.viagem.dataVolta }</div>
                        </div>
                    </div>
                    <button className="btn btn-danger my-3" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Voltar</button>
                </div>
            </div>
        )
    }
}

export default DetalhesViagem
