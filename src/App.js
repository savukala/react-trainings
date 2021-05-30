import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddTodo from './AddTodo';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  const [books, setBooks] = useState([]);
  
  
  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = () => {
    fetch('https://bookstore-59d19-default-rtdb.europe-west1.firebasedatabase.app/books/.json')
    .then(response => response.json())
    .then(data => addKeys(data))
    .catch(err => console.error(err))
  }
  // Add keys to the todo objects
  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) => 
    Object.defineProperty(item, 'id', {value: keys[index]}));
    setBooks(valueKeys);
  }

  const addTodo = (newTodo) => {
    fetch('https://bookstore-59d19-default-rtdb.europe-west1.firebasedatabase.app/books/.json',
    {
      method: 'POST',
      body: JSON.stringify(newTodo)
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }
  const deleteTodo = (id) => {
    fetch(`https://bookstore-59d19-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`,
   {
      method: 'DELETE',
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" noWrap>
            Bookstore
          </Typography>
        </Toolbar>
      </AppBar> 
      <AddTodo addTodo={addTodo}/>
      <div className="ag-theme-material" style={ { height: 400, width: 900, margin: 'auto' } }>
        <AgGridReact rowData={books}>
          <AgGridColumn width={200} resizable={true} sortable={true} filter={true} field='title' />
          <AgGridColumn width={200} resizable={true} sortable={true} filter={true} field='author' />
          <AgGridColumn width={100} resizable={true} sortable={true} filter={true} field='year' />
          <AgGridColumn width={200} resizable={true} sortable={true} filter={true} field='isbn' />
          <AgGridColumn width={100} resizable={true} sortable={true} filter={true} field='price' />
          <AgGridColumn 
            headerName=''
            field='id' 
            width={90}
            cellRendererFramework={ params => 
              <IconButton onClick={() => deleteTodo(params.value)} size="small" color="secondary">
                <DeleteIcon />
              </IconButton>
            }
          />      
        </AgGridReact>
      </div>
    </div>
   );
}

export default App;