const express = require('express')
const router = express.Router()
const db = require('../db.js')
const multer = require('multer')

const path = require('path')
const upload = multer({ dest: path.join(__dirname, '..', 'public/images/') })
// router.get('/', function (req, res) {
//     res.redirect('/want')
// })

router.get('/want', (req, res) => {
    const donatorInfo = {
        type: db.returnDonators()
    }
    res.render('want', donatorInfo)
})

router.get('/have', (req, res) => {

    const wanterInfo = {
        type: db.returnWanters()
    }
    res.render('have', wanterInfo)
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

    const donatorInfo = {
        type: db.returnDonators()
    }

    res.render('want', donatorInfo)
})

router.post('/have', upload.single('image'), (req, res) => {

    console.log(req.file)

    let newDonator = {
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        description: req.body.description,
        image: req.file.filename
    }

    console.log("newDonator: ", newDonator)

    db.createDonor(newDonator)

    const wanterInfo = {
        type: db.returnWanters()
    }

    res.render('have', wanterInfo)
})

module.exports = router