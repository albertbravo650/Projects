const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3, "Must be at least 3 characters"]
    },
}, {timestamps: true})

module.exports = mongoose.model('Task', TaskSchema)