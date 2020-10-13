inMemoryWorkshop = [];


function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop);
    });
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"));
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === name));
    });
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"));
        }
        if (!description) {
            reject(new Error("Workshop description required"));
        }
        inMemoryWorkshop.push({
            name,
            description
        });
        resolve();
    });
}

function updateWorkshop(oldName, newName, newDescription) {
    return new Promise((resolve, reject) => {
        getWorkshopByName(oldName).then(workshop => {
            workshop.name = newName? newName : workshop.name,
            workshop.description = newDescription? newDescription : workshop.description;
            resolve();
        })
        .catch(error => {
            reject(error);
        });
    });
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    updateWorkshop
};