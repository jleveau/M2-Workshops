var express = require('express');
const {removeWorkshopByName} = require('../data/inMemoryWorkshop');
const {getWorkshopList} = require('../data/inMemoryWorkshop');
var router = express.Router();

router.get('/:name', function (req, res) {
    const workshopName = req.params.name;
    removeWorkshopByName(workshopName).then(() => {
        getWorkshopList()
        .then(workshops => {
            res.render("index", {
                workshops: workshops
            })
        })
    .catch((e) => {
        console.log(e);
    })
})
})

module.exports = router;