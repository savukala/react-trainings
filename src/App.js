import React, { useState } from 'react';
import './App.css';

function App() {
  const [trivia, setTrivia] = useState({});


  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Response status not ok');
      }

      return response.json();
    })
    .then(resData => {
      /* console.log(resData.results[0].question); */
      setTrivia(resData.results[0]);
      
      
    })
  };



  return (
    <div className="App">
      
      <button onClick={fetchData}>New Question</button>
      <p>{trivia.question}</p>
    </div>
  );
}

export default App;