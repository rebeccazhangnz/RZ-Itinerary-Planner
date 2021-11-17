const express = require('express')
const { engine } = require('express-handlebars')

const serverRoutes = require('./routes/serverRoutes')

const server = express()

// Middleware

server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', serverRoutes)

module.exports = server