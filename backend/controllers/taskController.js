const asyncHandler = require ('express-async-handler') //Πακέτο που βοηθάει με κάποιο τρόπο
                                                       //Τη λειτουργία του Mongoose 




//@desc     Get tasks
//@route    GET /api/tasks
//@access   Private
const getTasks = asyncHandler( async (req,res) => {
    res.status(200).json({message:'Get taskitron'})
})

//@desc     Set task
//@route    POST /api/tasks
//@access   Private
const setTask = asyncHandler(async (req,res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field') //Built-in Express Error Handler
    }

    res.status(200).json({message:'Set tasks'})
})

//@desc     Update task
//@route    PUT /api/tasks/:id
//@access   Private
const updateTask = asyncHandler(async (req,res) => {
    res.status(200).json({message:`Update task ${req.params.id}`})
})

//@desc     Delete task
//@route    DELETE /api/tasks/:id
//@access   Private
const deleteTask = asyncHandler(async (req,res) => {
    res.status(200).json({message:`delete task ${req.params.id}`})
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}