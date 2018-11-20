const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Movie = new Schema({
    name: String,
    image: String,
    year: String,
    description: String,
    genre: String
})

module.exports = mongoose.model('Movie', Movie)