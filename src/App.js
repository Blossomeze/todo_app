import { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Card from './Card';
import { db } from './firebase';
import { onSnapshot, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          completed: doc.data().completed || false, // Default to false if 'completed' doesn't exist
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const addTodo = async (event) => {
    event.preventDefault();
    if (input.trim() !== '') {
      await addDoc(collection(db, 'todos'), { todo: input });
      setInput('');
    }
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  const toggleComplete = async (id, completed) => {
    await updateDoc(doc(db, 'todos', id), {
      completed: !completed,
    });
  };

  return (
    <div className="app">
      <div className="wrap">
      <div className='form'>
        <h1>Todo App🚀</h1>
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
          {todos.map((todo) => (
            <Card
              key={todo.id}
              text={todo.todo}
              completed={todo.completed}
              onDelete={() => deleteTodo(todo.id)}
              onToggleComplete={() => toggleComplete(todo.id, todo.completed)}
            />
          ))}
        </ul>
      </div>
      </div>
      <footer>Designed and developed by Blossom Eze</footer>
    </div>
  );
}

export default App;
