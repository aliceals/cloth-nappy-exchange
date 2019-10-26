const express = require('express')
const router = express.Router()
const wantData = require('../wanter.json')
const haveData = require('../donator.json')
const fs = require('fs')
const db = require('../db.js')
// router.get('/', function (req, res) {
//     res.redirect('/want')
// })

router.get('/want', (req, res) => {

    res.render('want')
})

router.get('/have', (req, res) => {
    res.render('have')
})

router.post('/want', (req, res) => {
    let newWanter = {
        name: req.body.name,
        location: req.body.location,
        age: req.body.age,
        email: req.body.email,
        notes: req.body.notes
    }

    db.createWanter(newWanter)

    res.render('want')
})

router.post('/have', (req, res) => {
    let newDonator = {
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        description: req.body.description,
        image: req.body.image
    }

    db.createDonor(newDonator)

    res.render('have')
})

module.exports = router