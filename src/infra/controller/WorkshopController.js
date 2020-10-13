const CreateWorkshop = require("../../domain/usecase/CreateWorkshop");
const DeleteWorkshop = require("../../domain/usecase/DeleteWorkshop");
const GetOneWorkshop = require("../../domain/usecase/GetOneWorkshop");
const GetAllWorkshop = require("../../domain/usecase/GetAllWorkshop");
const ModifyOneWorkshop = require("../../domain/usecase/ModifyOneWorkshop");
const ejs = require("ejs");

module.exports = class {
  constructor(app, repo) {
    this.repo = repo;
    this.app = app;
  }

  init() {}
};
