import React, { Component } from "react";
import { InputGroup, FormControl, Input } from "react-bootstrap";

let arr = [];

class SimpleKeyEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: "React-bootstrap key enter event"
    };
    this.onKeyUp = this.onKeyUp.bind(this);
  }

//Función agregar tarea

  onKeyUp(event) {
    if (event.charCode === 13) {
      this.setState({ inputValue: event.target.value });
	  arr.push(event.target.value);

    }
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div>
		<h1>To do list</h1>
        <InputGroup>
          <FormControl placeholder="Escribe la tarea" onKeyPress={this.onKeyUp} />
        </InputGroup>
        <hr />
        <span>{arr.map ( (arr) => <><p>{arr}<button onClick={() => {console.log("borrar")}}>x</button></p></>)}</span>
      </div>
    );
  }
}

//Función eliminar tarea

// function BorrarElemento (){
// 	arr.splice(value-1,1)
//   }

// let arr = ['gfg', 'GFG', 'g', 'GeeksforGeeks'];
// const arrayWithoutGFG = [];
 
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 'GFG') {
//         arrayWithoutGFG.push(arr[i]);
//     }
// }

export default SimpleKeyEvent;
