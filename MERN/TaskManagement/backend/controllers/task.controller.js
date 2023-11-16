const Task = require('../models/task.model')

module.exports.createTask = (req, res) => {
    const {title, description} = req.body
    Task.create({
        title,
        description
    })
    .then(task => res.json(task))
    .catch(err => res.status(400).json(err))
}

module.exports.updateTask = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(update => res.json(update))
    .catch(err => res.status(400).json(err))
}

module.exports.getAllTasks = (req, res) => {
    Task.find({})
    .then(task => res.json(task))
    .catch(err => res.json(err))
}

module.exports.getTask = (req, res) => {
    Task.findOne({_id: req.params.id})
    .then(task => res.json(task))
    .catch(err => res.json(err))
}

module.exports.deleteTask = (req, res) => {
    Task.deleteOne({_id: req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.json(err))
}