const express = require('express')
const hbs = require('handlebars')
const server = express()

server.get('/', (req, res) =>
    res.send("Hello World"))

module.exports = server