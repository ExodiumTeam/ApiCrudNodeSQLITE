const openDB = require('../configDB')

const selectAll = async (req, res) => {
	return openDB().then(db => {
		return db.all('SELECT * FROM Person')
			.then(result => res.json({
				statusCode: 200,
				result
			}))
	})
}

module.exports = selectAll