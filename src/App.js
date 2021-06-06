import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [calc, setCalc] = useState({firstvalue: '', secondvalue: '', result: ''});

  const inputChanged = (event) => {
    setCalc({...calc, [event.target.name]: event.target.value});
  }
  const addResult = (event) => {
    let result = Number(calc.firstvalue) + Number(calc.secondvalue);
    console.log(result);
    setCalc({...calc, [event.target.name]: result});
  }
  const subResult = (event) => {
    let result = Number(calc.firstvalue) - Number(calc.secondvalue);
    console.log(result);
    setCalc({...calc, [event.target.name]: result});
  }

  return (
    <div className="App">
      Result: {calc.result} <br />
    
      <input placeholder="First value" name="firstvalue" value={calc.firstvalue} onChange={inputChanged} />
      <input placeholder="Second value" name="secondvalue" value={calc.secondvalue} onChange={inputChanged} />
      <button name="result" onClick={addResult}>+</button>
      <button name="result" onClick={subResult}>-</button>
    
    </div>
  );
}

export default App;
