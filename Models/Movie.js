const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Movie = new Schema({
    name: String,
    image: String,
    year: String,
    description: String,
    genre: String,
    want_to_watch: Boolean,
    currently_watching: Boolean,
    already_watched: Boolean
})

module.exports = mongoose.model('Movie', Movie)