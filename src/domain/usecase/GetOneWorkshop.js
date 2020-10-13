module.exports = class {
  constructor(repo) {
    this.repo = repo;
  }

  execute(id) {
    return this.repo.findOneById(id);
  }
};
