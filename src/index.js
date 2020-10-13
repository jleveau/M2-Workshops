const express = require("express");
const path = require("path");
const InMemoryWorkshopRepository = require("./repo/InMemoryWorkshopRepository");
const CreateWorkshop = require("./domain/usecase/CreateWorkshop");
const DeleteWorkshop = require("./domain/usecase/DeleteWorkshop");
const GetOneWorkshop = require("./domain/usecase/GetOneWorkshop");
const GetAllWorkshop = require("./domain/usecase/GetAllWorkshop");
const ModifyOneWorkshop = require("./domain/usecase/ModifyOneWorkshop");
const WorkshopController = require("./infra/controller/WorkshopController");
let bodyParser = require("body-parser");

const app = express();
const repo = new InMemoryWorkshopRepository();
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, ".", "/view"));
app.use(express.static(path.join(__dirname, ".", "view")));

app.get("/", function (req, res) {
  //-console.log(this);
  const workshops = new GetAllWorkshop(repo).execute();
  res.render("index", { workshops: workshops });
});

app.get("/workshop", function (req, res) {
  //-console.log("get");
  res.render("workshop", {workshop: null});
});

app.post("/workshop", function (req, res) {
  //-console.log(req.body);
  const title = req.body.name;
  const description = req.body.description;
  new CreateWorkshop(repo)
    .execute(title, description)
    .then(() => {
      res.redirect("/");
    })
    .catch((e) => res.send(e.message));
});

app.get("/remove-workshop/:id", function (req, res) {
  //-console.log(req.params.id);
  new DeleteWorkshop(repo).execute(req.params.id);
  res.redirect("/");
});

app.get("/update-workshop/:id", function (req, res) {
  const workshop = new GetOneWorkshop(repo).execute(req.params.id);
  res.render("workshop", {workshop: workshop});
});

app.post("/update-workshop/:id", function (req, res) {
  console.log(req.params.id);
  console.log(req.body.title);
  new ModifyOneWorkshop(repo).execute(req.params.id, 
    req.body.name, 
    req.body.description
  );
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Workshop app listening on port 3000!");
});
