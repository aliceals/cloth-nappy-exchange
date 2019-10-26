const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes/routes')
const server = express()

//Middleware
server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))


//home page route
server.get('/', (req, res) =>
    res.render('home'))

//Routers
server.use('/', routes)



module.exports = server