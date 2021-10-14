import React from "react";

import { Route, HashRouter, Switch } from 'react-router-dom';

import Home from "../pages/Home/Home";
import CadastroProduto from "../pages/Produtos/Cadastro";

export default ()=>{
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro-produtos" component={CadastroProduto}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}