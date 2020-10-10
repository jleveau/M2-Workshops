module.exports = class {
  constructor(repo) {
    this.repo = repo;
  }

  execute(id) {
    this.repo.deleteOneById(id);
  }
};
