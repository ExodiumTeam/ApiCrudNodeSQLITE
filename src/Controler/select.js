const openDB = require('../configDB')

const select = async (req, res) => {
	const id = req.body.id

	openDB().then(db => {
		db.get('SELECT * FROM Person WHERE id=?', [id])
			.then(result => res.json({
				statusCode: 200,
				result
			}))
	})
}

module.exports = select
