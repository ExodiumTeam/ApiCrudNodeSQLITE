const openDB = require('../configDB')

const createTable = async () => {
	openDB().then(db => {
		db.exec('CREATE TABLE IF NOT EXISTS Person (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)')
	})
}

module.exports = createTable