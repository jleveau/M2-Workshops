

var express = require('express');
const InMemoryWorkshop = require("../data/inMemoryWorkshop")
var router = express.Router();

router.get('/', function (req, res) {
    res.render('workshop')
})

router.post('/', function (req, res) {
    const name = req.body.name
    const description = req.body.description
    InMemoryWorkshop.addWorkshop(name, description).then(() => {
        InMemoryWorkshop.getWorkshopList()
        .then(workshops => {
            res.render("index", {
                workshops: workshops
            })
        })
    })
     .catch(e =>res.send(e.message))
 })

module.exports = router;