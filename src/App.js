import { useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Card from './Card';


function App() {
  const [todos, setTodos] = useState(['Write Code','Buy a book','Play the guitar','Rent a house']);
  const [input, setInput] = useState('');
  console.log('🤩',input)
  const addTodo = (event) => {
    event.preventDefault()
    console.log('😍')
    setTodos([...todos, input]);
    setInput('');
    console.log(todos)
  }
  return (
    <div className="app">
      <div className='form'>
      <FormControl>
        <InputLabel>Add Task</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}  />
        <Button variant='contained' type='submit' onClick={addTodo} disabled={!input}>Add ToDo</Button>
      </FormControl>
      </div>
      <div>
        <ul>
          {todos.map(todo => (
            <Card text={todo} />
          ))}
        </ul>  
      </div>   
    </div>
  );
}

export default App;
