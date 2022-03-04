import { TextField, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { db } from './firebase_config';
import TaskListItem from './components/Task';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    getTasks();
  }, []);
  
  function getTasks() {
    db.collection("tasks").onSnapshot((querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          task: doc.data().task,
          in_progress: doc.data().in_progress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    
    db.collection("tasks").add({
      in_progress: true,
      time_stamp: firebase.firestore.FieldValue.serverTimestamp(),
      task: todoInput,
    });

    setTodoInput("");
  }

  return (
    <div className="App">
      <div className="content">
        <div className="header">
            <h1>ToDoApp</h1>
        </div>
        <form>
          <TextField className="textField" id="standard-basic" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} label="Write a Todo" />
          <Button className="submitBtn" type="submit" variant="contained" onClick={addTodo}>Default</Button>
        </form>

        <ul>
          {tasks.map((task) => (
            <TaskListItem 
              task={task.task}
              in_progress={task.in_progress}
              id={task.id} />
          ))}
        </ul>
      </div>
    </div>  
  );
}

export default App;
