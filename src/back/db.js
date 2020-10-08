db = [];

/**
 * @return {Promise} a Promise that is resolved with the list of workshops
 */
function getWorkshopList() {
  return new Promise((resolve ) => {
    resolve(db);
  });
}

/**
 * The promise is resolved with the workshop found and its index.
 * {
 *  name
 *  description
 *  index -> the index of the workshop in the list {@link db#getWorkshopList}
 * }
 *
 * @param {String} name the name of the workshop to get
 * @return {Promise} resolved once found, rejected if an error occured, or if
 *  nothing was found
 */
function getWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('name parameter is required'));
    }

    let idx = 0;
    let found = false;
    while (idx < db.length && !found) {
      if (db[idx].name === name) {
        found = true;
      } else {
        idx ++;
      }
    }

    if (found) {
      resolve(
          {
            name: db[idx].name,
            description: db[idx].description,
            index: idx,
          },
      );
    } else {
      reject(new Error('Could not find workshop with name ' + name));
    }
  });
}

/**
 * Adds a workshop to the list
 * @param {String} name
 * @param {String} description
 * @return {Promise} resolved once added, rejected if an error occured
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
 * Removed a workshop with the given name {name}
 * @param {String} name
 * @return {Promise} resolved once removed, rejected otherwise
 */
function removeWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('Workshop name required'));
    }
    getWorkshopByName(name)
        .then((workshop) => {
          db.splice(workshop.index, 1);
          resolve();
        })
        .catch(
            (e) => reject(new Error('Error during del of ' + name + ': ' + e)),
        );
  });
}

/**
 * Updates the workshop that has the name {oldName}
 * @param {String} oldName the name of the workshop to update
 * @param {String} name its new name
 * @param {String} description its new description
 * @return {Promise} resolved once updated, rejected if an error occured
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
