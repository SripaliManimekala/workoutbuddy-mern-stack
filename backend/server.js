//ENTRY FILE FOR THE BACKEND APPLICATION
require('dotenv').config()

const express = require('express')

///start of the express app
const app = express()

//reacting to requests
//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

//listen for requests(here process is a global object)
app.listen(process.env.PORT, () => {
    console.log('listening on port' , process.env.PORT)
})