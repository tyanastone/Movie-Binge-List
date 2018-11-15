const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    image: String,
    
    // array of objects. tells the program that you are holding multiples. One to Many relationship eg. "one store can have many products"
    movies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
})

module.exports = mongoose.model('User', User)