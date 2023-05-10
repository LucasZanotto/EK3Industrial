import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Areas from './pages/Areas';
import Local from './pages/Local';
import Contato from './pages/Contato';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/sobre" component={ Sobre } />
        <Route exact path="/areas" component={ Areas } />
        <Route exact path="/local" component={ Local } />
        <Route exact path="/contato" component={ Contato } />
      </Switch>
  )
}

export default App
