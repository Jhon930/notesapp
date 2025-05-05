const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    const taskList = await Task.find();
    res.json(taskList);
}

exports.addTask = async(req, res) => {

    //var buttonColors = ["primary","secondary","success","info","warning","danger"];
    //var randomChosenColor = buttonColors[newSequence()];

    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        status: "todo",
        color: "warning"
    });

    const newTask = await task.save();

    await task.save().then(() => res.json({ data: newTask, status: "success" }) )
                    .catch((err) => res.status(400).json({ message: err.message }));
}

/*function newSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}*/

exports.updateTask = async(req, res) => {

    const reqId  = req.params.id;

    if (!reqId) {
        res.status(400)
        throw new Error("Tarea no encontrada")
    }

    await Task.findByIdAndUpdate(reqId, req.body, {new: true})
                .then(() => res.status(200).json({ data: req.body, message: 'Tarea actualizada' }))
                .catch((err) => res.status(500).json({ message: err.message }))

}

exports.deleteTask = async(req, res) => {

    const reqId = req.params.id;

    await Task.findByIdAndDelete(reqId)
                .then(() => res.status(200).json({ message: 'Tarea removida'}))
                .catch((err) => res.status(500).json({ message: err.message }))
}