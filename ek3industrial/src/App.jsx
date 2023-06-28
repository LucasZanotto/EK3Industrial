import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Areas from './pages/Areas';
// import Local from './pages/Cultura';
import Contato from './pages/Contato';
import Cultura from './pages/Cultura';
import Escolha from './pages/Escolha';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/sobre" component={ Sobre } />
        <Route exact path="/areas" component={ Areas } />
        <Route exact path="/cultura" component={ Cultura } />
        <Route exact path="/escolha" component={ Escolha } />
        <Route exact path="/contato" component={ Contato } />
      </Switch>
  )
}

export default App
