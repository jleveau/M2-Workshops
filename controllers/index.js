var express = require('express');
const InMemoryWorkshop = require("../data/inMemoryWorkshop")
var router = express.Router();

router.get('/', function (req, res) {
    InMemoryWorkshop.getWorkshopList()
    .then(workshops => {
        res.render("index", {
            workshops: workshops
        })
    })
})

module.exports = router;