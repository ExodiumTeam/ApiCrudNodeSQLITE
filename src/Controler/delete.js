const openDB = require('../configDB')

const deletePerson = async (req, res) => {
	const id = req.body.id

	openDB().then(db => {
		db.get('DELETE FROM Person WHERE id=?', [id])
			.then(() => res.json({
				statusCode: 200,
				ready: true
			}))
	})
}

module.exports = deletePerson
