const express = require('express')
const router = express.Router()

// router.get('/', function (req, res) {
//     res.redirect('/want')
// })

router.get('/want', function (req, res) {
    res.render('want')
})

router.get('/have', function (req, res) {
    res.render('have')
})

module.exports = router;