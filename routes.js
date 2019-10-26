const express = require('express')
const router = express.Router()

// router.get('/', function (req, res) {
//     res.redirect('/want')
// })

router.get('/want', function (req, res) {
    res.render('home')
})

router.get('/have', function (req, res) {
    res.send("this is the page that will have the haves")
})

module.exports = router;