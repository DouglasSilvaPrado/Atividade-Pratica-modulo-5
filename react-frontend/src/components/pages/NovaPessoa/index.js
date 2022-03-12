import React, { Component } from 'react'
import PessoaService from '../../../services/PessoaService';

class NovaPessoa extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nome: '',
            cpf: '',
            telefone: ''
        }
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeCpfHandler = this.changeCpfHandler.bind(this);
        this.saveOrUpdatePessoa = this.saveOrUpdatePessoa.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PessoaService.getPessoaById(this.state.id).then( (res) =>{
                let pessoa = res.data;
                this.setState({nome: pessoa.nome,
                    cpf: pessoa.cpf,
                    telefone : pessoa.telefone
                });
            });
        }        
    }
    saveOrUpdatePessoa = (e) => {
        e.preventDefault();
        let pessoa = {nome: this.state.nome, cpf: this.state.cpf, telefone: this.state.telefone};
        console.log('pessoa => ' + JSON.stringify(pessoa));

        // step 5
        if(this.state.id === '_add'){
            PessoaService.createPessoa(pessoa).then(res =>{
                this.props.history.push('/pessoas');
            });
        }else{
            PessoaService.updatePessoa(pessoa, this.state.id).then( res => {
                this.props.history.push('/pessoas');
            });
        }
    }
    
    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeCpfHandler= (event) => {
        this.setState({cpf: event.target.value});
    }

    changeTelefoneHandler= (event) => {
        this.setState({telefone: event.target.value});
    }

    cancel(){
        this.props.history.push('/pessoas');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center primary-color">Adicionar Pessoa</h3>
        }else{
            return <h3 className="text-center primary-color">Editar Pessoa</h3>
        }
    }
    render() {
        return (
            <div className='alturaTela'>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nome: </label>
                                            <input placeholder="Nome" name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNomeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cpf: </label>
                                            <input placeholder="Cpf" name="cpf" className="form-control" 
                                                value={this.state.cpf} onChange={this.changeCpfHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telefone: </label>
                                            <input placeholder="Telefone Address" name="telefone" className="form-control" 
                                                value={this.state.telefone} onChange={this.changeTelefoneHandler}/>
                                        </div>

                                        <button className="btn btn-primary my-3" onClick={this.saveOrUpdatePessoa}>Salvar</button>
                                        <button className="btn btn-danger my-3" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Voltar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default NovaPessoa
