import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'; //npm install react-router-dom


import NavBar from './components/NavBar'
import PizzaComponent from './components/PizzaForm'

function App() {
  return (
    <Router>
    <div>
    <NavBar/>
  <PizzaComponent/>
    </div>
    </Router>
  );
}

export default App;
