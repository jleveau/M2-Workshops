let inMemoryWorkshop

function init () {
  inMemoryWorkshop = []
  return Promise.resolve()
}

function getWorkshopList () {
  return new Promise((resolve) => {
    resolve(inMemoryWorkshop)
  })
}

function getWorkshopByName (name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("name parameter is required"))
    }
    resolve(inMemoryWorkshop.find(workshop => workshop.name === name))
  })
}

function addWorkshop (name, description) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("Workshop name required"))
    }
    if (!description) {
      reject(new Error("Workshop description required"))
    }
    inMemoryWorkshop.push({
      name,
      description
    })
    resolve()
  })
}

function removeWorkshopByName (name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("Workshop name required"))
    }
    for (let i = 0; i < inMemoryWorkshop.length; i++) {
      if (inMemoryWorkshop[i].name === name) {
        inMemoryWorkshop.splice(i, 1)
        break
      }
    }
    resolve()
  })
}

function updateWorkshop (oldName, name, description) {
  return new Promise((resolve, reject) => {
    if (!oldName) {
      reject(new Error("Workshop old name required"))
    }
    if (!name) {
      reject(new Error("Workshop name required"))
    }
    if (!description) {
      reject(new Error("Workshop description required"))
    }
    removeWorkshopByName(oldName).then(() => {
      inMemoryWorkshop.push({
        name,
        description
      })
      resolve()
    })
  })
}

module.exports = {
  init,
  getWorkshopList,
  getWorkshopByName,
  addWorkshop,
  removeWorkshopByName,
  updateWorkshop
}
