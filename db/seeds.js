const mongoose = require('./connections')
const Movie  = require('../models/Movie')
const User  = require('../models/User')



// "Looks" like you're defining an instance of a class, adding a NEW Product(Product is defined at the top), followed after "Store model"
const Black_Lightning = new Movie({
    name: "Black Lightning",
    image: "https://pbs.twimg.com/media/Dr_RbMEU0AAzDyu.jpg",
    year: "2018",
    description: "The first season of the American television series Black Lightning, based on the DC Comics character Jefferson Pierce / Black Lightning, premiered on The CW on January 16, 2018 and ran for 13 episodes until April 17, 2018. The season introduces us to Jefferson Pierce, a high school principal who retired from his superhero identity Black Lightning nine years ago after seeing the effects it had on his family, is forced to become a hero again when the rise of the local gang called The 100 leads to increased crime and corruption in his community of Freeland. The season is produced by Berlanti Productions, Akil Productions, Warner Bros. Television, and DC Entertainment, with Salim Akil serving as showrunner.",
    genre: "Action",
    want_to_watch: false,
    currently_watching: true,
    already_watched: false
})

const Naruto_Shippuden = new Movie({
    name: "Naruto Shippuden",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUV6qojrj4adRSKj7SCP3d9DudNJi1nQVvUP41TViOe9J_ndbt",
    year: "2007",
    description: "More than two years have passed since the most recent adventures in the Hidden Leaf Village, ample time for ninja wannabe Naruto Uzumaki to have developed skills worthy of recognition and respect. The hyperactive youngster has trained extensively with Jiraiya-sama and returned to Konoha to reunite with friends and, perhaps, partake in more pranks than schoolwork. But Naruto is more determined than ever to become the greatest ninja, and his hard-earned improvements are put to the ultimate test against newer, stronger enemies.",
    genre: "Anime",
    want_to_watch: false,
    currently_watching: false,
    already_watched: true
})

const Chewing_Gum = new Movie({
    name: "Chewing Gum",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJVoFp0TpiV7WuRIZEQCqjALjG0qyMt8pdJidr7S5vD7SZGT3",
    year: "2015",
    description: "Tracey Gordon, a religious, Beyoncé-obsessed 24-year-old, is fast to find out that the more she learns about the world, the less she understands.",
    genre: "Comedy",
    want_to_watch: true,
    currently_watching: false,
    already_watched: false
})

// new instances of Store. Followed after "Store model"
const Mary = new User({
    name: "Mary",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3fa46375259c39d07d0227e8ade6daa&auto=format&fit=crop&w=500&q=60",
    movies: [Chewing_Gum]
})
const John = new User({
    name: "John",
    image: "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c0bebe40d57258868aa633e15197f07&auto=format&fit=crop&w=667&q=80",
    movies: [Naruto_Shippuden]
})

const Sarah = new User({
    name: "Sarah",
    image: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b4e41a670c097c8fd2834579f5d5958&auto=format&fit=crop&w=500&q=60",
    movies: [Black_Lightning]
})
// you want to re-seed your database
User.remove({})
    // creating all of these products into the following stores
    .then(() => Movies.insertMany([Black_Lightning, Naruto_Shippuden, Chewing_Gum]))
    // created stores and saved them
    .then(() => Mary.save())
    .then(() => John.save())
    .then(() => Sarah.save())
    // this message tells you that everything works
    .then(() => console.log("Database seeded success"))
    // this closes the mongoDB connection so that you don't have to exit in terminal
    .then(() => mongoose.connection.close())