const openDB = require('../configDB')

const update = async (req, res) => {
	const person = req.body

	openDB().then(db => {
		db.run('UPDATE Person SET name=?, age=? WHERE id=?', [
			person.name, 
			person.age,
			person.id
		]).then(() => res.json({
			statusCode: 200,
			ready: true
		}))
	})
}

module.exports = update
