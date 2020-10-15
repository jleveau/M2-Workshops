const express = require('express')
const router = express.Router()
const InMemoryWorkshop = require("../data/inMemoryWorkshop")
const ejs = require('ejs')

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
    }).catch(e => res.send(e.message))
})
module.exports = router;