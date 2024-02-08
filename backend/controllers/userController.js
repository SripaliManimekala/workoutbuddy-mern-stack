const User = require('../models/userModel')//use this user model to interact with the users collection in the database to save a record or get record etc
const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'} )//to sign there should be paylod(_id) and the secret//user will logged in for three days
}


// login user
const loginUser = async (req, res) => {
    res.json({mssg:'login user'})
}

//sign up user
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)

        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    signupUser,
    loginUser
}