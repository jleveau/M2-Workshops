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
    resolve(db.find((workshop) => workshop.name === workshop));
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
 * @param {String} name
 * @return {Promise}
 */
function updateWorkshop(name) {
  return new Promise((resolve, reject) => {
    reject(new Error('Not implemented'));
  });
}

module.exports = {
  getWorkshopList,
  getWorkshopByName,
  addWorkshop,
  removeWorkshopByName,
  updateWorkshop,
};
