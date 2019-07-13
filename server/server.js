//Module
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require('./src/user/routes')
const recipeRoutes = require('./src/recipe/routes')
require('./db')


let bodyParser = require('body-parser')


//Middelware
app.use(cors())
app.use(bodyParser.json())


//Route
app.use('/', userRoutes)
app.use('/', recipeRoutes)

//Port
const port = process.env.PORT || 5000 
app.listen(port, function() {
	console.log('Josette listening on port ' + port + '!')
});