const express = require('express')
const router = express.Router()
const InMemoryWorkshop = require("../data/inMemoryWorkshop")

router.get('/:name', function (req, res) {
    const workshopName = req.params.name
    InMemoryWorkshop.removeWorkshopByName(workshopName)
    .then(() => {
        InMemoryWorkshop.getWorkshopList()
            .then(workshops => {
                res.render("index", {
                    workshops: workshops
                })
            })
    }).catch(e => console.log(e))
})

module.exports = router;