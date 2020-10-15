

var express = require('express');
const {getWorkshopByName} = require('../data/inMemoryWorkshop');
const {updateWorkshop} = require('../data/inMemoryWorkshop');
const {getWorkshopList} = require('../data/inMemoryWorkshop');

var router = express.Router();

var oldName = "";

router.get('/:name', function (req, res) {
    const workshopName = req.params.name;
    getWorkshopByName(workshopName)
    .then((foundWorkshop) => {
        oldName = workshopName;
        res.render('edit', {workshop: foundWorkshop});
    })
    .catch((e) => {
        console.log(e);
    })
})

router.post('/:name', function (req, res) {
    const name = req.body.name
    const description = req.body.description
    updateWorkshop(oldName, name, description).then(() => {
        getWorkshopList()
        .then(workshops => {
            res.render("index", {
                workshops: workshops
            })
        })
    })
     .catch(e =>res.send(e.message))

 })


module.exports = router;