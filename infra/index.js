const express = require("express");
const app = express();
const InMemoryWorkshop = require("./inMemoryWorkshop");
const path = require("path");
const ejs = require("ejs");
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "/UI"));
app.use(express.static(path.join(__dirname, "..", "UI")));

app.get("/", function (req, res) {
  InMemoryWorkshop.getWorkshopList().then((workshops) => {
    res.render("index", {
      workshops: workshops,
    });
  });
});

app.get("/workshop", function (req, res) {
  console.log("get");
  res.render("workshop");
});

app.post("/workshop", function (req, res) {
  const name = req.body.name;
  const description = req.body.description;
  InMemoryWorkshop.addWorkshop(name, description)
    .then(() => {
      InMemoryWorkshop.getWorkshopList().then((workshops) => {
        res.redirect("/");
      });
    })
    .catch((e) => res.send(e.message));
});

app.get("/update-workshop/:name", function (req, res) {
  const workshopName = req.params.name;
  InMemoryWorkshop.getWorkshopByName(workshopName)
    .then((workshop) => {
      res.render("workshop", workshop);
    })
    .catch((e) => ejs.send(e.message));
});

app.get("/remove-workshop/:id", function (req, res) {
  console.log(req.params.id);
  InMemoryWorkshop.removeWorkshopById(req.params.id);

  res.redirect("/");
});

app.post("/update-workshop/:name", function (req, res) {
  const newName = req.body.name;
  const newDescription = req.body.description;
  workshop = InMemoryWorkshop.getWorkshopByName(name);
  InMemoryWorkshop.updateWorkshop(name, newName)
    .then(() => {
      InMemoryWorkshop.getWorkshopList().then((workshops) => {
        res.redirect("/");
      });
    })
    .catch((e) => res.send(e.message));
  // res.status(500).send("TODO");
});

app.listen(3000, function () {
  console.log("Workshop app listening on port 3000!");
});
