/* eslint-disable no-unused-vars */
let inMemoryWorkshop

function init() {
	inMemoryWorkshop = []
	return Promise.resolve()
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
		resolve(inMemoryWorkshop.find(workshop => workshop.name == name))
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
		const workshop = inMemoryWorkshop.find(workshop => workshop.name == name)
		inMemoryWorkshop.splice(inMemoryWorkshop.indexOf(workshop), 1)
		resolve()
	})
}

function updateWorkshop(name, description) {
	return new Promise((resolve, reject) => {
		if (!name) {
			reject(new Error("Workshop name required"))
		}
		if (!description) {
			reject(new Error("Workshop description required"))
		}
		inMemoryWorkshop.find(workshop => workshop.name == name).description = description;
		resolve()
	})
}

module.exports = {
	init,
	getWorkshopList,
	getWorkshopByName,
	addWorkshop,
	removeWorkshopByName,
	updateWorkshop
}