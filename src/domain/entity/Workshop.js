const { v4: uuid } = require("uuid");

module.exports = class {
  constructor(title, content) {
    this.id = uuid();
    this.title = title;
    this.content = content;
  }
};
