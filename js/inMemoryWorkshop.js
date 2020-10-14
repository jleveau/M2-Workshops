const inMemoryWorkshop = []

function getWorkshopList () {
  return new Promise((resolve) => {
    resolve(inMemoryWorkshop)
  })
}

function getWorkshopByName (name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('name parameter is required'))
    }
    resolve(inMemoryWorkshop.find(workshop => workshop.name === workshop))
  })
}

function addWorkshop (name, description) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('Workshop name required'))
    }
    if (!description) {
      reject(new Error('Workshop description required'))
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
      reject(new Error('Workshop name required'))
    }
    if (inMemoryWorkshop.findIndex(workshop => workshop.name === name) === -1) {
      reject(new Error('Invalid workshop name '))
    }
    inMemoryWorkshop.splice(inMemoryWorkshop.findIndex(workshop => workshop.name === name), 1)
    resolve()
  })
}

function updateWorkshop (oldName, newName, newDesc) {
  return new Promise((resolve, reject) => {
    if (!oldName) {
      reject(new Error('No name given to find the workshop'))
    }
    if (!newName && !newDesc) {
      reject(new Error('No new data given to change the workshop'))
    }
    if (newName && !newDesc) {
      reject(new Error('You need to give a new description'))
    }
    if (!newName && newDesc) {
      reject(new Error('You need to give a new name'))
    }
    if (newName && newDesc) {
      inMemoryWorkshop.find(workshop => workshop.name === oldName).description = newDesc
      inMemoryWorkshop.find(workshop => workshop.name === oldName).name = newName
    }
    resolve()
  })
}

module.exports = {
  getWorkshopList,
  getWorkshopByName,
  addWorkshop,
  removeWorkshopByName,
  updateWorkshop
}
