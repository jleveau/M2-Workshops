const InMemoryWorkshop = require("../models/inMemoryWorkshop")

exports.createNewWorkshop = function (req, res) {
    const name = req.body.name
    const description = req.body.description
    InMemoryWorkshop.addWorkshop(name, description).then(() => {
        InMemoryWorkshop.getWorkshopList()
        .then(() => {
            res.redirect("/workshops");
        })
    })
    .catch(e =>res.send(e.message))
};

exports.printWorkshops = function (req, res) {
    InMemoryWorkshop.getWorkshopList()
    .then(workshops => {
        res.render("index", {
            workshops: workshops
        })
    })
};

exports.getCreateWorkshopView = function (req, res) {
    console.log("get")
    res.render('workshop')
};

exports.removeWorkshop = function (req, res) {
    res.status(500).send("TODO")
};

exports.updateWorkshop = function(req, res) {
    res.status(500).send("TODO")
};