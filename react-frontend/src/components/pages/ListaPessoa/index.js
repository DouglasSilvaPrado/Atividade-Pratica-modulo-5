import React, { Component } from 'react'
import PessoaService from '../../../services/PessoaService'

class ListaPessoa extends Component {
    constructor(props) {
        super(props)

        this.state = {
                pessoas: []
        }
        this.addPessoa = this.addPessoa.bind(this);
        this.editPessoa = this.editPessoa.bind(this);
        this.deletePessoa= this.deletePessoa.bind(this);
    }

    deletePessoa(id){
        PessoaService.deletePessoa(id).then( res => {
            this.setState({pessoas: this.state.pessoas.filter(pessoa => pessoa.id !== id)});
        });
    }
    viewPessoa(id){
        this.props.history.push(`/view-pessoa/${id}`);
    }
    editPessoa(id){
        this.props.history.push(`/add-pessoa/${id}`);
    }

    componentDidMount(){
        PessoaService.getPessoas().then((res) => {
            this.setState({ pessoas: res.data});
            console.log(res.data)
        });
    }

    addPessoa(){
        this.props.history.push('/add-pessoa/_add');
    }

    render() {
        return (
            <div className='my-3 alturaTela container'>
                 <h1 className="text-center primary-color">Pessoas Cadastradas</h1>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPessoa}> Adicionar Pessoa</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nome</th>
                                    <th> CPF</th>
                                    <th> Telefone</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.pessoas.map(
                                        pessoa => 
                                        <tr key = {pessoa.id}>
                                             <td> {pessoa.nome} </td>   
                                             <td> {pessoa.cpf}</td>
                                             <td> {pessoa.telefone}</td>
                                             <td>
                                                 <button onClick={ () => this.editPessoa(pessoa.id)} className="btn btn-primary">Editar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePessoa(pessoa.id)} className="btn btn-danger">Excluir </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPessoa(pessoa.id)} className="btn btn-primary">Detalhes</button>
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

export default ListaPessoa