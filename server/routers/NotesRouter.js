const express = require('express');
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/TaskController');
const router = express.Router();

router.route('/tasks').get(getTasks).post(addTask);
router.route('/tasks/:id').put(updateTask).delete(deleteTask);

module.exports = router;

