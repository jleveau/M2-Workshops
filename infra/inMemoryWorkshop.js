let inMemoryWorkshop = [];

function getWorkshopList() {
  return new Promise((resolve) => {
    resolve(inMemoryWorkshop);
  });
}

function getWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("name parameter is required"));
    }
    resolve(inMemoryWorkshop.find((workshop) => workshop.name === workshop));
  });
}

function getWorkshopById(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error("id parameter is required"));
    }
    if (id < 0 | id >= inMemoryWorkshop.length()){
      reject(new Error("id parameter is out of bound"));
    }
    resolve(inMemoryWorkshop[id]);
  });
}

function addWorkshop(name, description) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("Workshop name required"));
    }
    if (!description) {
      reject(new Error("Workshop description required"));
    }
    inMemoryWorkshop.push({
      name,
      description,
    });
    resolve();
  });
}

function removeWorkshopById(id) {
  return new Promise((resolve, reject) => {
    if (id < 0) {
      reject(new Error("Invalid Id"));
    }
    inMemoryWorkshop.splice(id, 1);
  });
}

function updateWorkshop(id, newName, newDescription) {
  return new Promise((resolve, reject) => {
    if (!newName) {
      reject(new Error("Workshop name required"));
    }
    if (!newDescription) {
      reject(new Error("Workshop description required"));
    }
    getWorkshopById(id)
      .then( workshop => {
        workshop.name = newName;
        workshop.description = newDescription;
      });
    resolve();
  });
}

module.exports = {
  getWorkshopList,
  getWorkshopByName,
  getWorkshopById,
  addWorkshop,
  removeWorkshopById,
  updateWorkshop,
};
