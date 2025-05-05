const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    color: String,
});

module.exports = mongoose.model('tasks', taskSchema);