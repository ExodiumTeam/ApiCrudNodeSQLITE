const { Router } = require('express')

const insert = require('./Controler/insert')
const selectAll = require('./Controler/selectAll')
const select = require('./Controler/select')
const update = require('./Controler/update')
const deletePerson = require('./Controler/delete')

const router = Router()

router.get('/', (_req, res) => {
	res.json({
		statusCode: 200,
		message: "App is running!" 
	})
})

router.post('/person', insert)
router.get('/all', selectAll)
router.get('/person', select)
router.put('/person', update)
router.delete('/person', deletePerson)

module.exports = router