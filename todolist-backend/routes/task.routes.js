import { Router } from "express";
import { createTask, deleteTask, fetchTask, fetchTasks, searchTask } from "../controllers/task.controllers.js";

const router = Router(); 

router.route('/')
    .post(createTask)
    .get(fetchTasks)

router.route('/search').get(searchTask)
    

router.route('/:id')
    .get(fetchTask)
    .delete(deleteTask)

export default router; 