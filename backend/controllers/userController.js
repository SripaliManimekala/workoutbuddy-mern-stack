const User = require('../models/userModel')//use this user model to interact with the users collection in the database to save a record or get record etc

// login user
const loginUser = async (req, res) => {
    res.json({mssg:'login user'})
}

//sign up user
const signupUser = async (req, res) => {
    res.json({mssg:'sign up user'})
}

module.exports = {
    signupUser,
    loginUser
}