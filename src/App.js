import React, { useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('')


  const fetchData = () => {
    fetch('https://api.github.com/search/repositories?q=' + search)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Response status not ok');
      }

      return response.json();
    })
    .then(resData => {
      setProjects(resData.items);
    })
  };
  const inputChanged = (event) => {
    setSearch(event.target.value);
  }
  


  return (
    <div className="App">
      <h1>Repositories</h1>
     <input placeholder="Keyword" value={search} onChange={inputChanged} />
      <button onClick={fetchData}>Search</button>
      
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>URL</th>
        </tr>
        {
          projects.map((result, index) => 
           <tr key={index}>             
             <td>{result.full_name}</td>
             <td><a href={result.url}>{result.url}</a></td>
             
           </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;