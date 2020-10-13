module.exports = class {
  constructor(repo) {
    this.repo = repo;
  }

  execute() {
    return this.repo.findAll();
  }
};
