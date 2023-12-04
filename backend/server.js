//ENTRY FILE FOR THE BACKEND APPLICATION
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

///start of the express app
const app = express()

//middleware is the code that executes between us getting a request on the server and us sending a response
app.use(express.json())//looks if there is a body to the request if it has it atachwes it to the req object
//this function will fire for every request that comes in
app.use((req, res, next) => {
    console.log("Middleware is working")
    console.log(req.path, req.method)
    next()
})

//reacting to requests
//routes
app.use('/api/workouts', workoutRoutes)

//listen for requests(here process is a global object)
app.listen(process.env.PORT, () => {
    console.log('listening on port' , process.env.PORT)
})