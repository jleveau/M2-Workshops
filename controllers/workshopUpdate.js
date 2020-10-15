const express = require('express')
const router = express.Router()
const InMemoryWorkshop = require("../data/inMemoryWorkshop")
const ejs = require('ejs')

router.get('/:name', function (req, res) {
    const workshopName = req.params.name
    InMemoryWorkshop.getWorkshopByName(workshopName)
        .then(workshop => {
            res.render('workshop-update', {workshop : workshop})
        })
        .catch(e => console.log(e))
})

router.post('/', function (req, res) {
    const workshopOldName = req.body.oldName
    const workshopName = req.body.name
    const workshopDescription = req.body.description
    InMemoryWorkshop.updateWorkshop(workshopOldName, workshopName, workshopDescription)
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