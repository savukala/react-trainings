// Addbooks.js

import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddTodo(props) {
    const [open, setOpen] = useState(false);
    const [books, setbooks] = useState({title: '', author: '', year: '', isbn: '', price: ''});


    const handleOpen = () => {
        setOpen(true);
    }
    
      const handleClose = () => {
        setOpen(false);
    }
    const inputChanged = (event) => {
        setbooks({...books, [event.target.name]: event.target.value});
    }
    const handleSave = () => {
        props.addTodo(books);
        handleClose();
    }


  return(
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add book
      </Button>
      <Dialog open={open}> 
        <DialogTitle>New book</DialogTitle>
        <DialogContent>
        <TextField
            name="title"
            value={books.title}
            onChange={inputChanged}
            margin="dense"
            label="Title"
            fullWidth
          /> 
         <TextField
           name="author"
           value={books.author}
           onChange={inputChanged}
           margin="dense"
           label="Author"
           fullWidth
         /> 
         <TextField
           name="year"
           value={books.year}
           onChange={inputChanged}
           margin="dense"
           label="Year"
           fullWidth
         /> 
         <TextField
           name="isbn"
           value={books.isbn}
           onChange={inputChanged}
           margin="dense"
           label="Isbn"
           fullWidth
         /> 
         <TextField
           name="price"
           value={books.price}
           onChange={inputChanged}
           margin="dense"
           label="Price"
           fullWidth
         /> 
        </DialogContent>
        <DialogActions>
        <Button color="primary" onClick={handleClose}>Cancel</Button>
        <Button color="primary" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog> 
    </div>
  );
}

export default AddTodo;