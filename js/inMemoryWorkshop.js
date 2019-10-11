/* eslint-disable require-jsdoc */
inMemoryWorkshop = [];


function getWorkshopList() {
  return new Promise((resolve, ) => {
    resolve(inMemoryWorkshop);
  });
}

function getWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('name parameter is required'));
    }
    resolve(inMemoryWorkshop.find((workshop) => workshop.name === workshop));
  });
}

function addWorkshop(name, description) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('Workshop name required'));
    }
    if (!description) {
      reject(new Error('Workshop description required'));
    }
    inMemoryWorkshop.push({
      name,
      description,
    });
    resolve();
  });
}

function removeWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    reject(new Error('Not implemented'));
  });
}

function updateWorkshop(name, newName, newDesc) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('Workshop name required'));
    }
    const wsToUpdate =
        inMemoryWorkshop.find((workshop) => workshop.name === name);
    wsToUpdate.description = newDesc;
    wsToUpdate.name = newName;
    resolve();
  });
}

module.exports = {
  getWorkshopList,
  getWorkshopByName,
  addWorkshop,
  removeWorkshopByName,
  updateWorkshop,
};
