//ENTRY FILE FOR THE BACKEND APPLICATION
require('dotenv').config()

const express = require('express')

///start of the express app
const app = express()

//middleware is the code that executes between us getting a request on the server and us sending a response
//this function will fire for every request that comes in
app.use((req, res, next) => {
    console.log("Middleware is working")
    console.log(req.path, req.method)
    next()
})

//reacting to requests
//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

//listen for requests(here process is a global object)
app.listen(process.env.PORT, () => {
    console.log('listening on port' , process.env.PORT)
})