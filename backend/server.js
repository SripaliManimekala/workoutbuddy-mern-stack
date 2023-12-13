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

//use mongoose object to connect to the database
mongoose.connect(process.env.MONGO_URI)//this is async in nature,takes a lil bit time to do, so it returns a promise, so we tack on it using .then method to fire a function when its complete
    .then(() =>{
        //listen for requests(here process is a global object) omce we connected to the db
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port' , process.env.PORT)
        })
    })
    .catch((error) =>{
        console.log(error)
    })

