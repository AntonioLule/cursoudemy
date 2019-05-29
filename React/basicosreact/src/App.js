import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){

    const empleado = {
      nombre: 'Antonio',
      trabajo: 'Desarrollador full stack'
    }

    return (
      <div className="App">
        <p><h1>Brenda monserrat garcia gomes!! Aveces ME CAGAS</h1></p>

        <p>Nombre: {empleado.nombre}</p>
        <p>Trabajo: {empleado.trabajo}</p>

      </div>
    );

  }

}

export default App;
