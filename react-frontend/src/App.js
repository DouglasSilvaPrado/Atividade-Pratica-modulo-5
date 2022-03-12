import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// pages
import Home from "./components/pages/Home/index";
import Destino from "./components/pages/Destino";
import Promocao from "./components/pages/Promocao";
import Contato from "./components/pages/Contato";
// pages viagem
import ListaViagens from "./components/pages/ListaViagens";
import NovaViagem from "./components/pages/NovaViagem";
import DetalhesViagem from "./components/pages/DetalhesViagem";
// pages pessoa
import ListaPessoa from "./components/pages/ListaPessoa";
import NovaPessoa from "./components/pages/NovaPessoa";
import DetalhesPessoa from "./components/pages/DetalhesPessoa";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          {/* Rotas Principais */}
          <Route exact path="/" component={Home}></Route>
          <Route path="/Destino" component={Destino}></Route>
          <Route path="/Promocao" component={Promocao}></Route>
          <Route path="/Contato" component={Contato}></Route>

          {/* Rotas Viagens */}
          <Route path="/Viagens" component={ListaViagens}></Route>
          <Route path="/add-viagem/:id" component={NovaViagem}></Route>
          <Route path="/view-viagem/:id" component={DetalhesViagem}></Route>

          {/* Rotas Pessoas */}
          <Route path="/Pessoas" component={ListaPessoa}></Route>
          <Route path="/add-pessoa/:id" component={NovaPessoa}></Route>
          <Route path="/view-pessoa/:id" component={DetalhesPessoa}></Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
