import axios from "axios";
import React, { useEffect, useState } from "react";
import {server} from "../index"

export const AddTask = () => {
    const [title, setTitle] = useState(''); 
    const [date, setDate] = useState(''); 
    const [status, setStatus] = useState('Todo');
    const [tasks, setTasks] = useState([]); 
    async function fetchTasks(){
      const {data} = await axios.get(server)
      setTasks(data.tasks)
  }
    useEffect(() => {
      fetchTasks()
    }, [tasks])

    const handleSubmit = async(e) => {
      try{
        e.preventDefault(); 
        const { data } = await axios.post(server, {title, dueDate: date, status})
        fetchTasks(data.tasks)
        setTitle(''); setDate(''); setStatus('Todo')
      } catch(error) {
        console.error("Error creating task:", error);
      }
    }

    return (
      <form onSubmit={handleSubmit} className="newTask">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
          <input type="date" name="" id="" value={date} onChange={(e) => setDate(e.target.value)} required/>
          <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Todo">ToDo</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
          </select>
          <button type="submit">Add Task</button>
      </form>
    )
}

export default AddTask