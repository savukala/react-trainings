import React, {useState} from 'react';
import './App.css';

function Message(props) {
  return (
    <div className="App">
        {props.message.length <= 10 
        ? <p>{props.message}</p> 
        : <p>Too long.</p>
      }
      
    </div>
  );
}

export default Message;
