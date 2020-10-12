const ejs = require("ejs");

const InMemoryWorkshop = require("../models/inMemoryWorkshop");

exports.createNewWorkshop = function (req, res) {
    const name = req.body.name;
    const description = req.body.description;
    InMemoryWorkshop.addWorkshop(name, description).then(() => {
        InMemoryWorkshop.getWorkshopList()
            .then(() => {
                res.redirect("/workshops");
            });
    })
        .catch(e =>res.send(e.message));
};

exports.printWorkshops = function (req, res) {
    InMemoryWorkshop.getWorkshopList()
        .then(workshops => {
            res.render("index", {
                workshops: workshops
            });
        });
};

exports.getCreateWorkshopView = function (req, res) {
    res.render("workshop");
};

exports.removeWorkshop = function (req, res) {
    const name = req.params.name;
    InMemoryWorkshop.removeWorkshopByName(name)
        .then(() => {
            res.redirect("/workshops");
        })
        .catch(error => res.status(400).send(error.message));
};

exports.updateWorkshop = function(req, res) {
    InMemoryWorkshop.updateWorkshop(req.params.name, req.body.name, req.body.description)
        .then(() => {
            res.redirect("/workshops");
        })
        .catch(error => res.status(400).send(error.message));
};

exports.getUpdateWorkshopView = function (req, res) {
    const name = req.params.name;
    InMemoryWorkshop.getWorkshopByName(name)
        .then(workshop => {
            res.render("updateWhorkshop", { 
                workshop: workshop
            });
        })
        .catch(error => res.status(400).send(error.message + "ici"));
};

exports.getWorkshopViewByName = function (req, res) {
    const workshopName = req.params.name;
    InMemoryWorkshop.getWorkshopByName(workshopName)
        .then(workshop => {
            res.render("ejs/workshop", workshop);
        })
        .catch(e =>ejs.send(e.message));
};