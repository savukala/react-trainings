import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);



  useEffect(() => {
    
    fetch('https://api.github.com/search/repositories?q=react')
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Response status not ok');
      }

      return response.json();
    })
    .then(resData => {
      setProjects(resData.items);
    })
  },[])

  


  return (
    <div className="App">
      
      
      <h1>Repositories</h1>
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>URL</th>
        </tr>
        {
          projects.map((user, index) => 
           <tr key={index}>             
             <td>{user.full_name}</td>
             <td><a href={user.url}>{user.url}</a></td>
             
           </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;