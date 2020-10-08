db = [];

/**
 * TODO
 * @return {Promise}
 */
function getWorkshopList() {
  return new Promise((resolve ) => {
    resolve(db);
  });
}

/**
 * TODO
 * @param {String} name
 * @return {Promise}
 */
function getWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('name parameter is required'));
    }
    resolve(db.findIndex((workshop) => workshop.name === name));
  });
}

/**
 * TODO
 * @param {String} name
 * @param {String} description
 * @return {Promise}
 */
function addWorkshop(name, description) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('Workshop name required'));
    }
    if (!description) {
      reject(new Error('Workshop description required'));
    }
    db.push({
      name,
      description,
    });
    resolve();
  });
}

/**
 * TODO
 * @param {String} name
 * @return {Promise}
 */
function removeWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    reject(new Error('Not implemented'));
  });
}

/**
 * TODO
 * @param {String} oldName
 * @param {String} name
 * @param {String} description
 * @return {Promise}
 */
function updateWorkshop(oldName, name, description) {
  return new Promise((resolve, reject) => {
    if (!oldName) {
      reject(new Error('Workshop old name required'));
    }
    if (!name) {
      reject(new Error('Workshop name required'));
    }
    if (!description) {
      reject(new Error('Workshop description required'));
    }
    getWorkshopByName(oldName)
        .then((workshop) => {
          db[workshop.index].name = name;
          db[workshop.index].description = description;
          resolve();
        })
        .catch(
            (e) => reject(new Error('Error during update of workshop: ' + e)),
        );
  });
}

module.exports = {
  getWorkshopList,
  getWorkshopByName,
  addWorkshop,
  removeWorkshopByName,
  updateWorkshop,
};
