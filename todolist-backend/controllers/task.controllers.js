import { Task } from "../models/task.models.js"

export const createTask = (async (req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }   
})

export const searchTask = (async (req, res) => {
    try{
        const {term} = req.query
        let tasks; 
        if(isNaN(Date.parse(term))) {
            tasks = await Task.find({
                title: new RegExp(term.trim(), 'i') 
            })
        } else {
            const searchDate = new Date(term)
            if(isNaN(searchDate.getTime())) {
                return res.status(401).json({message: "Invalid date format."})
            }
            tasks = await Task.find({
                dueDate: searchDate
            })
        }
        return res.status(200).json({tasks: tasks})
    } catch(error) {
        res.status(500).json({ message: error.message })
    }   
})

export const fetchTasks = (async (req, res) => {
    try{
        const {term} = req.query
        let tasks = await Task.find()
        res.status(200).json({tasks: tasks})
    } catch(error) {
        res.status(500).json({ message: error.message })
    }   
})

export const fetchTask = (async (req, res) => {
    try{
        const task = await Task.findById(req.params.id)
        res.status(200).json(task)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }   
})

export const deleteTask = (async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json(task)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }   
})