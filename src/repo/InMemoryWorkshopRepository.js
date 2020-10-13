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
    let res = this.workshops.find( v => v.id === id );
    return res;
  }

  findAll() {
    return this.workshops;
  }

  modifyOneById(id, title, content) {
    let workshop =  this.findOneById(id);
    workshop.id = id;
    workshop.title = title;
    workshop.content = content;
  }

  deleteOneById(id) {
    let indice;
    for (let i = 0; i < this.workshops.length; i++) {
      if (this.workshops[i].id === id) indice = i;
    }
    this.workshops.splice(indice, 1);
  }
};
