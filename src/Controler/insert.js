const openDB = require('../configDB')

const insert = (req, res) => {
	const person = req.body

	openDB().then(db => {
		db.run('INSERT INTO Person (name, age) VALUES (?, ?)', [
			person.name,
			person.age
		])
	}).then(() => {
		res.json({
			statusCode: 200,
			ready: true
		})
	})
}

module.exports = insert
