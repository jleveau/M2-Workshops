const express = require("express");

const InMemoryWorkshop = require("../models/inMemoryWorkshop")

const router = express.Router();

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

router.post('/workshop', function (req, res) {
    const name = req.body.name
    const description = req.body.description
    InMemoryWorkshop.addWorkshop(name, description).then(() => {
        InMemoryWorkshop.getWorkshopList()
        .then(() => {
            res.redirect("/workshops");
        })
    })
    .catch(e =>res.send(e.message))
})

router.get('/workshop/:name', function (req, res) {
    const workshopName = req.params.name
    InMemoryWorkshop.getWorkshopByName(workshopName)
    .then(workshop => {
        res.render('ejs/workshop', workshop)
    })
    .catch(e =>ejs.send(e.message))
})

router.post('/remove-workshop', function (req, res) {
    res.status(500).send("TODO")
})

router.post('/update-workshop', function(req, res) {
    res.status(500).send("TODO")
})

module.exports = router;
