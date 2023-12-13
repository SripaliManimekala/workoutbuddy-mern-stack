const mongoose = require('mongoose')//since mongodb alone is schemaless

const Schema = mongoose.Schema

//define the stucture
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

//schema defines the structure of a particular document inside our database
//what amodel does is
//apply that schema to a model, this creates a model
module.exports = mongoose.model("Workout", workoutSchema)
