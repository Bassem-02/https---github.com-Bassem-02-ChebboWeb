const express = require('express')

const route = express.Router()

const userController = require('../controllers/user.controller') ;

route.post('/signup' ,userController.signup )
route.post('/signin' ,userController.signin )


module.exports = route