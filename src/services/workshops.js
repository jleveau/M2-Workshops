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
    resolve(inMemoryWorkshop.find(workshop => workshop.name === name))
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
    reject(new Error('Not implemented'))
  })
}

function updateWorkshop (previousName, name, description) {
  return new Promise((resolve, reject) => {
    if (!previousName) {
      reject(new Error('Workshop name required'))
    }
    if (!name) {
      reject(new Error('Workshop name required'))
    }
    if (!description) {
      reject(new Error('Workshop description required'))
    }
    const workshop = inMemoryWorkshop.find(w => w.name === previousName)
    workshop.name = name
    workshop.description = description
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
