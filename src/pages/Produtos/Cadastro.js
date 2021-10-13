import React from "react";

export default class CadastroProduto extends React.Component{
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
                                <input/>
                            </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}