const path = require ('path')
const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require ('./middleware/errorMiddleware')
const connectDB = require ('./config/db')
const { sendFile } = require('express/lib/response')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())                         //Middleware για να καταλαβαίνει 
app.use(express.urlencoded({extended: false}))  //jsons forms κτλ.

app.use('/api/tasks',require('./routes/tasksRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

//Serve frontend
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*',(req,res) => res.sendFile(path.resolve(__dirname, '../','frontend','build', 'index.html')))
} else{
    app.get('/',(req,res) => res.send('please set to production'))
}

app.use(errorHandler)                           

app.listen(port,()=>console.log(`server started on port ${port}`))