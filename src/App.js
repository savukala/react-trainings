import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import SaveIcon from '@material-ui/icons/Save';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: ''});
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Todolist
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField 
        style={{marginRight: 10}} 
        label="Description" 
        name="description" 
        value={todo.description} 
        onChange={inputChanged} 
      />
     <TextField 
       style={{marginRight: 10}} 
       label="Date" 
       name="date" 
       value={todo.date} 
       onChange={inputChanged}
      />
     <Button 
       style= {{margin: 10}} 
       color="primary" 
       variant="outlined" 
       onClick={addTodo}>
        <SaveIcon></SaveIcon> Add
     </Button>
     <table>
    <tbody>
    {
      todos.map((todo, index) => 
      <tr key={index}>
        <td>{todo.description}</td>
        <td>{todo.date}</td>
        <td><Tooltip title='Delete todo' arrow>
          <Button size="small" color="secondary" onClick={() => deleteTodo(index)}>Delete</Button>
          </Tooltip>
          </td>
      </tr>)
     }
     </tbody>
   </table>
  </div>
  );
}

export default App;