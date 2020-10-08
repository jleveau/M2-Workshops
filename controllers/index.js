const express = require('express')
const router = express.Router()
const InMemoryWorkshop = require("../data/inMemoryWorkshop")

router.get('/', function (req, res) {
    InMemoryWorkshop.getWorkshopList()
        .then(workshops => {
            res.render("index", {
                workshops: workshops
            })
        })
})

router.get('/workshop', function (req, res) {
    console.log("get")
    res.render('workshop')
})

module.exports = router;