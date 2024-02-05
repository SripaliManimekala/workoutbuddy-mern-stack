const express = require('express')

//controller functions
const {  signupUser, loginUser } = require('../controllers/userController')

const router = express.Router()//instance of the express router

//we need a login route
router.post('/login', loginUser)

//and a sign up route
router.post('/signup', signupUser)

module.exports =  router