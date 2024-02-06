const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
})

//stattic methods are
//User.create() like this we can use on user model also we can create our own static methods

//static sign up method
userSchema.statics.signup = async function(email, password) {

    //validation
    if(!email || !password){//if we dont have a email or password
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){//valid =false
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    //chaeck  if the user is already exists or not even though its unique 
    const exists = await this.findOne({email})

    if(exists) {
        throw Error('Email already in use')
    }

    //if it doesnt exist then we should hash it and save it. to hash the passwords we use a package called bcrypt.
    //hashing the password using a salt before bcrypt
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)//hash=hashed Password

    const user = await this.create({ email, password: hash})

    return user
}

module.exports = mongoose.model('User', userSchema)