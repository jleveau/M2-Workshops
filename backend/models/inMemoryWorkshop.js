inMemoryWorkshop = []
inMemoryWorkshop.push({name: 'w1', description: 'd1'});
inMemoryWorkshop.push({name: 'w2', description: 'd2'});
inMemoryWorkshop.push({name: 'w3', description: 'd3'});


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
		let i=0;
		for (i=0; i<inMemoryWorkshop.length; i++) {
			if (name === inMemoryWorkshop[i].name) {
				inMemoryWorkshop.splice(i, 1);
				break;
			}
		}
		resolve(inMemoryWorkshop);
	});
}

function updateWorkshop(name, newName, newDescription) {
	console.log("element à modifié:" + name)
	return new Promise((resolve, reject) => {
		for (let i=0; i<inMemoryWorkshop.length; i++) {
			if (name === inMemoryWorkshop[i].name) {
				inMemoryWorkshop[i].name = newName;
				inMemoryWorkshop[i].description = newDescription;
				console.log("element modifié")
				break;
			}
		}
		resolve();
	});
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
}