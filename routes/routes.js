const express = require('express')
const router = express.Router()
const wantData = require('../wanter.json')
const haveData = require('../donator.json')
const fs = require('fs')
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

    let currentData = {
        info: wantData
    }

    console.log(currentData.info.wanter)
    currentData.info.wanter.push(newWanter)

    let editedData = JSON.stringify(currentData, null, 2)

    console.log(editedData)

    fs.writeFileSync('wanter.json', editedData)

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

    let currentData = {
        info: haveData
    }

    currentData.info.donator.push(newDonator)

    let editedData = JSON.stringify(currentData, null, 2)


    fs.writeFileSync('donator.json', editedData)

    res.render('have')
})

module.exports = router