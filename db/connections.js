const mongoose = require('mongoose')
require ('dotenv').config()


mongoose.connect('mongodb://localhost/Movie_Binge')

mongoose.connection.once('open', () => {
  console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
  console.error(`MongoDB connection error!!! ${error}`)
  process.exit(-1)
})

module.exports = mongoose

// const mongoose = require('mongoose')
// require ('dotenv').config()
// Connect to database
// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI);
// }
// else {
//   mongoose.connect('mongodb://localhost/express-movies');
// }
// mongoose.connection.on('error', function(err) {
//   console.error('MongoDB connection error: ' + err);
//   process.exit(-1);
//   }
// );
// mongoose.connection.once('open', function() {
//   console.log("Mongoose has connected to MongoDB!");
// });


// module.exports = mongoose