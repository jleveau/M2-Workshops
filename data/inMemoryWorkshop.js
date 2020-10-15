inMemoryWorkshop = []


function getWorkshopList() {
    return new Promise((resolve,) => {
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
            reject(new Error("Workshop name required"))
        }
        let i = 0;
        for (var workshop in inMemoryWorkshop) {
            if (inMemoryWorkshop[workshop].name === name) {
                inMemoryWorkshop.splice(i, 1);
                break;
            }
            i++;
        }
        resolve()
    })
}

function updateWorkshop(oldName, name, description) {
    return new Promise((resolve, reject) => {
        if (!oldName) {
            reject(new Error("Workshop oldName required"))
        }
        if (!name) {
            reject(new Error("Workshop name required"))
        }
        if (!description) {
            reject(new Error("Workshop description required"))
        }
        for (var workshop in inMemoryWorkshop) {
            if (inMemoryWorkshop[workshop].name === oldName) {
                inMemoryWorkshop[workshop].name = name;
                inMemoryWorkshop[workshop].description = description;
                break;
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