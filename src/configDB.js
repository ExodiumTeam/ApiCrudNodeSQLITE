const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const openDB = () => {
	return open({
		filename: './database.db',
		driver: sqlite3.Database
	})
}

module.exports = openDB
