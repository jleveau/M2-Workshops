let inMemoryWorkshop = [];


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
	console.log("ok");
	return new Promise((resolve, reject) => {
		if(!name){
			reject(new Error("Workshop name required"));
		}
		console.log(inMemoryWorkshop);
		let i = inMemoryWorkshop.findIndex(name);
		inMemoryWorkshop.splice(i, 1);
		resolve();
	});
}

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