/* eslint-disable no-undef */
var inMemoryWorkshop = [];


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
        resolve(inMemoryWorkshop.find(workshop => workshop.name === workshop));
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
        if (!name){
            reject(new Error("Workshop need a name to be delete"));
        }

        // Array.find

        for(let i = 0; i < inMemoryWorkshop.length; i++){
            if(inMemoryWorkshop[i].name == name){
                // Delete workshop
                inMemoryWorkshop.splice(i, 1);
            }
        }
        resolve();
        
        // reject(new Error("Not implemented"));
    });
}


// function removeWorkshopByName(name) {
//     return new Promise((resolve, reject) => {
//         reject(new Error("Not implemented"));
//     });
// }

function updateWorkshop(name) {
    return new Promise((resolve, reject) => {
        reject(new Error("Not implemented"));
    });
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
};