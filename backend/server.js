const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require ('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())                         //Middleware για να καταλαβαίνει 
app.use(express.urlencoded({extended: false}))  //jsons forms κτλ.

app.use('/api/taskitron',require('./routes/taskitronRoutes'))

app.use(errorHandler)                           

app.listen(port,()=>console.log(`server started on port ${port}`))