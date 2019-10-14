inMemoryWorkshop = []


function getWorkshopList() {
    return new Promise((resolve) => {
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
            reject(new Error("désolé monsieur on a pas reussi"))
        }
        for(let i = 0; i < inMemoryWorkshop.length; ++i){ 
           if ( inMemoryWorkshop[i].name === name) {
             inMemoryWorkshop.splice(i, 1); 
           }
        }
        resolve()
    })
}

function updateWorkshop(oldName,name,description) {
    return new Promise((resolve, reject) => {
        if (!oldName) {
            reject(new Error("Comment veux tu que je trouve le workshop si tu me donne pas sont nom!"))
        }
        if (!name) {
            reject(new Error("heu je ne peux pas changer le nom tu m'en a pas donner!"))
        }
        if (!description) {
            reject(new Error("Yosh bro j'ai besoin d'une description ciao!"))
        }
        for(let i = 0; i < inMemoryWorkshop.length; ++i){ 
            if ( inMemoryWorkshop[i].name === oldName) {
                if (inMemoryWorkshop[i].name == name && inMemoryWorkshop[i].description == description) {
                    reject(new Error("no difference noticed"))
                }
                inMemoryWorkshop[i].name = name;
                inMemoryWorkshop[i].description = description;
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