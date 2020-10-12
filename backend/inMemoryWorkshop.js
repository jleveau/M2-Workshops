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
    var obj = JSON.parse(JSON.stringify(inMemoryWorkshop))
    for (var i = 0; i < inMemoryWorkshop.length; i++) {
      console.log('obj' + obj[i].name)
      console.log(name)
      if (obj[i].name === name) {
        console.log('here')
        inMemoryWorkshop.splice(i, 1)
      }
    }
    resolve()
  })
}

function updateWorkshop (name, oldName) {
  return new Promise((resolve, reject) => {
    var obj = JSON.parse(JSON.stringify(inMemoryWorkshop))
    for (var i = 0; i < inMemoryWorkshop.length; i++) {
      if (obj[i].name === oldName) {
        obj[i].name = name
        inMemoryWorkshop[i] = obj[i]
      }
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
