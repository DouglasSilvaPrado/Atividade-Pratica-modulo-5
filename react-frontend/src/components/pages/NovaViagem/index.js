import React, { Component } from 'react'
import ViagemService from '../../../services/ViagemService'

class NovaViagem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            origem: '',
            destino: '',
            dataIda: '',
            dataVolta: ''
        }
        this.changeOrigemHandler = this.changeOrigemHandler.bind(this);
        this.changeDestinoHandler = this.changeDestinoHandler.bind(this);
        this.changeDataIdaHandler = this.changeDataIdaHandler.bind(this);
        this.changeDataVoltaHandler = this.changeDataVoltaHandler.bind(this);
        this.saveOrUpdateViagem = this.saveOrUpdateViagem.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ViagemService.getViagemById(this.state.id).then( (res) =>{
                let viagem = res.data;
                this.setState({origem: viagem.origem,
                    destino: viagem.destino,
                    dataIda : viagem.dataIda,
                    dataVolta : viagem.dataVolta
                });
            });
        }        
    }
    saveOrUpdateViagem = (e) => {
        e.preventDefault();
        let viagem = {origem: this.state.origem, destino: this.state.destino, dataIda: this.state.dataIda, dataVolta: this.state.dataVolta};
        console.log('viagem => ' + JSON.stringify(viagem));

        // step 5
        if(this.state.id === '_add'){
            ViagemService.createViagem(viagem).then(res =>{
                this.props.history.push('/viagens');
            });
        }else{
            ViagemService.updateViagem(viagem, this.state.id).then( res => {
                this.props.history.push('/viagens');
            });
        }
    }

    changeOrigemHandler = (event) => {
        this.setState({origem: event.target.value})
    }

    changeDestinoHandler = (event) => {
        this.setState({destino: event.target.value})
    }

    changeDataIdaHandler = (event) => {
        this.setState({dataIda: event.target.value})
    }

    changeDataVoltaHandler = (event) => {
        this.setState({dataVolta: event.target.value})
    }
    

    cancel(){
        this.props.history.push('/viagens');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center primary-color">Adicionar Viagem</h3>
        }else{
            return <h3 className="text-center primary-color">Editar Viagem</h3>
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
                                            <label> Origem: </label>
                                            <input placeholder="Origem" name="origem" className="form-control" 
                                                value={this.state.origem} onChange={this.changeOrigemHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Destino: </label>
                                            <input placeholder="Destino" name="destino" className="form-control" 
                                                value={this.state.destino} onChange={this.changeDestinoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Ida: </label>
                                            <input type='date'  name="dataIda" className="form-control" 
                                                value={this.state.dataIda} onChange={this.changeDataIdaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Volta: </label>
                                            <input type='date' name="dataIda" className="form-control" 
                                                value={this.state.dataVolta} onChange={this.changeDataVoltaHandler}/>
                                        </div>


                                        <button className="btn btn-primary my-3" onClick={this.saveOrUpdateViagem}>Salvar</button>
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

export default NovaViagem