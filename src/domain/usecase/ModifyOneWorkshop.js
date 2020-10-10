module.exports = class {
  constructor(repo) {
    this.repo = repo;
  }

  execute(id, title, content) {
    this.repo.modifyOneById(id, title, content);
  }
};
