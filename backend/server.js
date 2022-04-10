const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require ('./middleware/errorMiddleware')
const connectDB = require ('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())                         //Middleware για να καταλαβαίνει 
app.use(express.urlencoded({extended: false}))  //jsons forms κτλ.

app.use('/api/tasks',require('./routes/tasksRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler)                           

app.listen(port,()=>console.log(`server started on port ${port}`))