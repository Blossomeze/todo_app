import { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Card from './Card';
import { db } from './firebase'; // Import the 'db' from the updated Firebase module
import { onSnapshot, collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Use the 'db' imported from the Firebase module
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });

    return () => {
      // Unsubscribe from the Firestore snapshot when the component unmounts
      unsubscribe();
    };
  }, []);

  const addTodo = async (event) => {
    event.preventDefault();
    // Use the 'db' imported from the Firebase module
    await addDoc(collection(db, 'todos'), { todo: input });
    setInput('');
  };

  return (
    <div className="app">
      <div className='form'>
        <FormControl>
          <InputLabel>Add Task</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)} />
          <Button variant='contained' type='submit' onClick={addTodo} disabled={!input}>
            Add ToDo
          </Button>
        </FormControl>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <Card key={index} text={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
