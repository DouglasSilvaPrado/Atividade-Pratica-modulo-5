import React, { Component } from 'react'
import PessoaService from '../../../services/PessoaService'

class DetalhesPessoa extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            pessoa: {}
        }
    }

    componentDidMount(){
        PessoaService.getPessoaById(this.state.id).then( res => {
            this.setState({pessoa: res.data});
        })
    }

    cancel(){
        this.props.history.push('/pessoas');
    }

    render() {
        return (
            <div className='alturaTela'>
                <br></br>
                <div className = "card col-md-6 offset-md-3 text-center">
                    <h3 className = "primary-color">Detalhes</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nome: </label>
                            <div> { this.state.pessoa.nome }</div>
                        </div>
                        <div className = "row">
                            <label> CPF: </label>
                            <div> { this.state.pessoa.cpf }</div>
                        </div>
                        <div className = "row">
                            <label> Telefone </label>
                            <div> { this.state.pessoa.telefone }</div>
                        </div>
                    </div>
                    <button className="btn btn-danger my-3" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Voltar</button>
                </div>
            </div>
        )
    }
}

export default DetalhesPessoa