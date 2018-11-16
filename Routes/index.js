const express = require('express')
const router = express.Router()
// requiring cotrollers
const userController = require('../Controllers/userController')
const movieController = require('../Controllers/movieController')

// Routes for Model 1
router.get('/api/users', userController.index)
router.post('/api/users', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)



// Routes for Model 2
router.get('/api/users/:userId/movie', movieController.index)
router.get('/api/movie/:movieId', movieController.show)
router.delete('/api/movie/:movieId', movieController.delete)



module.exports = router