const Workshop = require("../entity/Workshop");

module.exports = class {
  constructor(repo) {
    this.repo = repo;
  }

  execute(title, desciption) {
    const workshop = new Workshop(title, desciption);
    this.repo.save(workshop);
    return new Promise((resolve, reject) => {
      if (workshop) resolve(workshop);
      else reject();
    });
  }
};
