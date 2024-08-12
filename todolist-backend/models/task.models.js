import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    dueDate: {
        type: Date, 
        required: true
    },
    status: {
        type: String, 
        enum: ['Todo', 'In progress', 'Done'],
        default: 'Todo'
    }
}, {
    timestamps: true
})

export const Task = mongoose.model("Task", TaskSchema)