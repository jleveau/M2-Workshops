
const express = require("express")
const app = express()
const path = require("path")
const ejs = require("ejs")
var bodyParser = require("body-parser")
const repository = require("./components/workshop/inMemoryWorkshop")
const { removeWorkshopByName } = require("./components/workshop/inMemoryWorkshop")
// const repository = require("./components/workshop/mongoWorkshop")

let oldName = ""

repository.init().then(() => {
  app.use(bodyParser.urlencoded({ extended: false }))

  // set the view engine to ejs
  app.set("view engine", "ejs")
  app.set("views", path.join(__dirname, ".", "/views"))
  app.use(express.static(path.join(__dirname, "..", "/public/styles")))

  app.get("/", function (req, res) {
    repository.getWorkshopList()
      .then(workshops => {
        res.render("index", {
          workshops: workshops
        })
      })
  })

  app.get("/workshop", function (req, res) {
    console.log("get")
    res.render("workshop")
  })

  app.post("/workshop", function (req, res) {
    const name = req.body.name
    const description = req.body.description
    repository.addWorkshop(name, description).then(() => {
      repository.getWorkshopList()
        .then(workshops => {
          res.render("index", {
            workshops: workshops
          })
        })
    })
      .catch(e => res.send(e.message))
  })

  app.get("/update-workshop/:name", function (req, res) {
    const workshopName = req.params.name
    repository.getWorkshopByName(workshopName)
      .then(workshop => {
        oldName = workshopName
        res.render("update-workshop", { workshop: workshop })
      })
      .catch(e => ejs.send(e.message))
  })

  app.get("/remove-workshop/:name", function (req, res) {
    const name = req.params.name
    removeWorkshopByName(name).then(() => {
      repository.getWorkshopList()
        .then(workshops => {
          res.render("index", {
            workshops: workshops
          })
        })
    })
      .catch(e => ejs.send(e.message))
  })

  app.post("/update-workshop", function (req, res) {
    const newName = req.body.name
    const newDescription = req.body.description
    repository.updateWorkshop(oldName, newName, newDescription).then(() => {
      repository.getWorkshopList()
        .then(workshops => {
          res.render("index", {
            workshops: workshops
          })
        })
    })
      .catch(e => ejs.send(e.message))
    oldName = ""
  })

  app.listen(3000, function () {
    console.log("Workshop app listening on port 3000!")
  })
})
