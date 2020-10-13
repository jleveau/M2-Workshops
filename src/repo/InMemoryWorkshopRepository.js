const WorkshopRepository = require("../domain/ports/WorkshopRepository");

module.exports = class extends WorkshopRepository {
  constructor() {
    super();
    this.workshops = [];
  }

  save(workshop) {
    this.workshops.push(workshop);
  }

  findOneById(id) {
    return this.workshops.map((curr) => {
      if (curr.id === id) return curr;
    });
  }

  findAll() {
    return this.workshops;
  }

  modifyOneById(id) {
    this.workshops.map((curr) => {
      if (curr.id === id) {
        curr.title = title;
        curr.content = content;
        return;
      }
    });
  }

  deleteOneById(id) {
    let indice;
    for (let i = 0; i < this.workshops.length; i++) {
      if (this.workshops[i].id === id) indice = i;
    }
    this.workshops.splice(indice, 1);
  }
};
