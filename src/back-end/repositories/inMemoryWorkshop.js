let inMemoryWorkshop;

function init() {
    inMemoryWorkshop = [];
    return Promise.resolve();
}

function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop)
    })
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === name))
    })
}

function addWorkshop(name, description) {
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

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("workshop name required"));
        }
        inMemoryWorkshop.pop(name)
        resolve(inMemoryWorkshop);
    });
}

function updateWorkshop(oldName, newName, description) {
    return new Promise((resolve, reject) => {
        if (!oldName)
            reject(new Error("Workshop oldName is required"));
        if (!newName)
            reject(new Error("Workshop newName is required"));
        if (!description)
            reject(new Error("description name is required"));

        for (let i=0; i<inMemoryWorkshop.length; i++) {
            if (oldName === inMemoryWorkshop[i].name) {
                inMemoryWorkshop[i].name = newName;
                inMemoryWorkshop[i].description = description;
                break;
            }
        }
        resolve();
    });
}

module.exports = {
    init,
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
}