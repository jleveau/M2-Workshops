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


module.exports = router;