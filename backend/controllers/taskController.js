const asyncHandler = require ('express-async-handler') //Πακέτο που βοηθάει με κάποιο τρόπο
                                                       //Τη λειτουργία του Mongoose 
const Task = require('../models/taskModel')
const User = require('../models/userModel')


//@desc     Get tasks
//@route    GET /api/tasks
//@access   Private
const getTasks = asyncHandler( async (req,res) => {
    const tasks = await Task.find({user: req.user.id})

    res.status(200).json(tasks)
})

//@desc     Set task
//@route    POST /api/tasks
//@access   Private
const setTask = asyncHandler(async (req,res) => {
    if (!req.body.task){
        res.status(400)
        throw new Error('Please add a text field') //Built-in Express Error Handler
    }

    const task = await Task.create({
        title:req.body.task.title,
        user:req.user.id,
        description:req.body.task.description,
        location:req.body.task.location,
        priority:req.body.task.priority,
        assign:req.body.task.assign,
        list:req.body.task.list,
        date:req.body.date,
    })

    res.status(200).json(task)
})

//@desc     Update task
//@route    PUT /api/tasks/:id
//@access   Private
const updateTask = asyncHandler(async (req,res) => {
    const task = await Task.findById(req.params.id)

    if(!task){
        res.status(400)
        throw new Error('Task not found')        
    }

    

    //Check for user
    if(!req.user){
        res.status(401)
        throw new Error('USer not found')
    }

    //Make sure the logged in user matches the task user
    if(task.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedTask= await Task.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })

    res.status(200).json(updatedTask)
})

//@desc     Delete task
//@route    DELETE /api/tasks/:id
//@access   Private
const deleteTask = asyncHandler(async (req,res) => {
    const task = await Task.findById(req.params.id)

    if(!task){
        res.status(400)
        throw new Error('Task not found')        
    }

    

    //Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the task user
    if(task.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await task.remove()

    res.status(200).json({id:req.params.id})
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}