/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
var inMemoryWorkshop = []


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
            reject(new Error("name parameter is required"))
        }
        let tmp = [...inMemoryWorkshop];
        inMemoryWorkshop = [];
        for (let i = 0; i < tmp.length; i += 1) {
            if (tmp[i].name !== name) {
              inMemoryWorkshop.push({
                name: tmp[i].name,
                description: tmp[i].description
            });
        }
        }
        resolve()
    })
}

function updateWorkshop (oldName, name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"))
        }
    if (!oldName) {
        reject(new Error("Workshop old name required"))
    }
        if (!name) {
            reject(new Error("description parameter is required"))
        }
        removeWorkshopByName(oldName).then(()=> {
            inMemoryWorkshop.push({
                name,
                description
            })
            resolve()
        });
    })
}

module.exports = {
    addWorkshop,
    getWorkshopByName,
    getWorkshopList,
    removeWorkshopByName,
    updateWorkshop
}