import React from "react";
import ProdutoService from "../../app/produtoService";

const initialState = {
    nome:'',
    sku:'',
    descricao:'',
    preco:0,
    fornecedor:'',
}

export default class CadastroProduto extends React.Component{
    state = initialState;

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    onChange=(event)=>{
        const valor = event.target.value;
        const nomeDoCampo = event.target.name;
        this.setState({[nomeDoCampo]:valor})
    }

    eraseInput = (event)=>{
        this.setState(initialState)
    }


    onSubmit = (event) =>{
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor,
        }
        this.service.salvar(produto)
        this.eraseInput()
        alert('Produto Salvo com sucesso !')
    }

   
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de Produtos
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome:</label>
                                <input name="nome" placeholder="Digite seu nome" type="text" value={this.state.nome} className="form-control" onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU:</label>
                                <input 
                                    name="sku" 
                                    type="text" value={this.state.sku} 
                                    className="form-control" 
                                    onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                               <label>Descriçao</label>
                               <textarea 
                                    name="descricao" 
                                    className="form-control" 
                                    value={this.state.descricao} 
                                    onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">    
                                <label>Preço:</label>
                                <input 
                                    name="preco" 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.preco} 
                                    onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor:</label>
                                 <input 
                                    name="fornecedor" 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.fornecedor}
                                     onChange={this.onChange}/>
                             </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-danger">Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button onClick={this.eraseInput} className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}