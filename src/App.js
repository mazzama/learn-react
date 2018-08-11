import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {
  state = {
    persons : [
      {name : 'Azzam', age: 22},
      {name : 'Stephanie', age:22},
      {name : 'Sara', age:23}
    ]
  }
  switchNameHandler = (newName) => {
    // console.log("Button diklik");
    // GAK WORK -> this.state.persons[0].name = 'Azzam';
    this.setState({
      persons : [
        {name : newName, age: 22},
        {name : 'Stephanie', age:22},
        {name : 'Sara', age:23}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name : 'Azzam', age: 22},
        {name : event.target.value, age:22},
        {name : 'Sara', age:23}
      ]
    })
  }
  render () {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      curson : 'pointer'
    }
    return (
      <div className="App">
        <h1> Hello World </h1>
        <button 
        style={style} 
        onClick={this.switchNameHandler.bind(this, 'Adam')} > Switch Name </button>
        {/* <button onClick={() => this.switchNameHandler('Abdul')} > Switch Name </button> */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Azzam!')}
          changed={this.nameChangedHandler}> My Hobbies : Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Hello World'))
  }
}
export default App;
