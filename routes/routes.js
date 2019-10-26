const express = require('express')
const router = express.Router()
const wantData = require('../wanter.json')
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

module.exports = router