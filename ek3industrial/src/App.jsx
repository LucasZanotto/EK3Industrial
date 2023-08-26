import { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Cultura from './pages/Cultura';
import AreasConsultoria from './pages/AreasConsultoria';
import AreasTreinamento from './pages/AreasTreinamento';
import AreasEmpreendimento from './pages/AreasEmpreendimento';
import SobreCultura from './pages/SobreCultura';

function App() {

  return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/sobre" component={ Sobre } />
        <Route exact path="/areas/consultoria" component={ AreasConsultoria } />
        <Route exact path="/areas/treinamento" component={ AreasTreinamento } />
        <Route exact path="/areas/empreendimento" component={ AreasEmpreendimento } />
        <Route exact path="/cultura" component={ SobreCultura } />
        <Route exact path="/escolha" component={ Cultura } />
        <Route exact path="/contato" component={ Contato } />
      </Switch>
  )
}

export default App
