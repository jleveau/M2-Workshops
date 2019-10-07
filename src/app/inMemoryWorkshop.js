const inMemoryWorkshop = [];


function getWorkshopList() {
  return new Promise((resolve) => {
    resolve(inMemoryWorkshop);
  });
}

function getWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('name parameter is required'));
    }
    resolve(inMemoryWorkshop.find((workshop) => workshop.name === name));
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
    if (!name) {
      reject(new Error('Workshop name is needed'));
    } else {
      resolve(getWorkshopByName(name)
        .then((workshop) => {
          getWorkshopList()
            .then((workshops) => {
              workshops.splice(workshops.indexOf(workshop));
            });
        }));
    }
  });
}

function updateWorkshop(name, description) {
  return new Promise((resolve, reject) => {
    if (!name || !description) {
      reject(new Error('Workshop name and description needed'));
    } else {
      resolve(getWorkshopByName(name)
        .then((workshop) => {
          // eslint-disable-next-line no-param-reassign
          workshop.description = description;
        }));
    }
  });
}

module.exports = {
  getWorkshopList,
  getWorkshopByName,
  addWorkshop,
  removeWorkshopByName,
  updateWorkshop,
};
