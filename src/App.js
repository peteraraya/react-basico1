import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Primera Forma :
// function Hello (props){
//   return <h2>{props.title}</h2>
// }

// Segunda Forma : Optimización con función de flecha
// const Hello = (props) => <h2>{props.title}</h2>

// Tercera Forma : 
class Hello extends Component {
  // esta clase debe tener como minimo un render -> el cual tiene el elemento que queremos reutilizar
  // el metodo render no tiene parametros y debemos utilizar antes un this

  render() {
    return <h2>{this.props.title}</h2>
  }
}


class Text extends Component {
  render() {// siempre debe devolver un solo elemento

    // utilización de booleano
    const { 
            arrayOfNumber, 
            isActivated, 
            multiply,
            ObjectWithInfo,
            text,
            number,
            title
          } = this.props // destructuración del objeto en react

    const textoSegunBool = isActivated ? 'On' : 'Off';

    const mappedNumbers = arrayOfNumber.map(multiply);

    return <div>
            {title}
            <p>{mappedNumbers.join(', ')}</p>
            <p>{ObjectWithInfo.key}</p>
            <p>{text}</p>
            <p>{number}</p>
            <p>{textoSegunBool}</p>
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Bienvenidos a React" />
        <Text 
              arrayOfNumber = {[2,4,6,8]} // arreglos
              ObjectWithInfo={{ key: 'First Value' , key2: 'otherValue'}} // objetos
              isActivated
              multiply={(number) => number * 2}
              text="texto en string" // textos
              number="3"  // numeros
              boolean={false} // booleanos 
              title={<h1>Este es un titulo</h1>}
              />
      </header>
    </div>
  );
}

export default App;
