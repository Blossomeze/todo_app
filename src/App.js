import { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Card from './Card';
import db from './firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log('🤩',input)

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

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
