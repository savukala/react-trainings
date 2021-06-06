import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [person, setPerson] = useState({name: '', age: ''});

  const inputChanged = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }
  const formSubmitted = (event) => {
    event.preventDefault();
    {person.age >= 18
      ? alert(`Hello ${person.name}`)
      : alert(`You are too young`);
    }

  }
  return (
    <div className="App">
      
    <form onSubmit={formSubmitted}>
      <input placeholder="First name" name="name" value={person.name} onChange={inputChanged} />
      <input placeholder="Last name" name="age" value={person.age} onChange={inputChanged} />
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default App;
