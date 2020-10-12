/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        workshop = inMemoryWorkshop.find(workshop => workshop.name === name);
        if(!workshop){
            reject(new Error("Workshop doesn't exist"));
        }
        inMemoryWorkshop= inMemoryWorkshop.filter(workshop=> workshop.name !==name);
        resolve();
    });
}

function updateWorkshop(name,newName, newDescription) {
    return new Promise((resolve, reject) => {
        workshop = inMemoryWorkshop.find(workshop => workshop.name === name);
        if(!workshop){
            reject(new Error("Workshop doesn't exist"));
        }
        workshop.name = newName;
        workshop.description = newDescription;
        resolve();
    });
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
};