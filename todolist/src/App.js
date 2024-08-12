import React from 'react';
import './App.css';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';

function App(){
  
  return (
    <div className="App">
      <h2>Todo Application</h2>
      <div className="todo">
        <AddTask  />
        <TaskList /> 
      </div>
    </div>
  );
}

export default App;
