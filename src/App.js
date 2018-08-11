import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {
  state = {
    persons : [
      {id : 1, name : 'Azzam', age: 22},
      {id : 2, name : 'Stephanie', age:22},
      {id : 3, name : 'Sara', age:23}
    ],
    otherState : 'some other value',
    showPersons : false
  }

  // switchNameHandler = (newName) => {
  //   // console.log("Button diklik");
  //   // GAK WORK -> this.state.persons[0].name = 'Azzam';
  //   this.setState({
  //     persons : [
  //       {name : newName, age: 22},
  //       {name : 'Stephanie', age:22},
  //       {name : 'Sara', age:23}
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render () {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      curson : 'pointer'
    }

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}         
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
        
    }
    return (
      <div className="App">
        <h1> Hello World </h1>
        <button 
        style={style} 
        onClick={this.togglePersonsHandler} > Toggle Persons </button>
        {/* onClick={this.nameChangedHandler.bind(this, 'David')} > Switch Name </button> */}
        {/* <button onClick={() => this.switchNameHandler('Abdul')} > Switch Name </button> */}
        
        {persons}
        
        
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Hello World'))
  }
}
export default App;