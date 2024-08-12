import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";

export const TaskList = () => {
    const [searchTerm, setSearchTerm] = useState(''); 
    const [tasks, setTasks] = useState([]); 
    async function fetchTasks(){
        const {data} = await axios.get(server)
        setTasks(data.tasks)
    }
    useEffect(() => {
        fetchTasks()
    }, [])

    const handleSearch = async(e) => {
        e.preventDefault(); 
        const { data } = await axios.get(`${server}/search?term=${searchTerm}`)
        console.log(data.tasks)
        setTasks(data.tasks)
    }

    const handleDelete = async(id) => {
        await axios.delete(`${server}/${id}`)
        fetchTasks()
    }
    
    return (
       <div>
            <form onSubmit={handleSearch} className="searchSection">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button type="submit" className="searchBtn">Search</button>
            </form>
            <ul className="tasks">
                <h3>To Do list:</h3>
                {tasks.map(task => (
                    <li key={task._id}>
                        <span className="task">{task.title} - {new Date(task.dueDate).toLocaleDateString()} - {task.status} </span>
                        <button onClick={() => handleDelete(task._id)} className="delBtn">Delete</button>
                    </li>
                ))}
            </ul>
       </div>
    )
}