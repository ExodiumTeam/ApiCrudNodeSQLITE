# Simple API CRUD - NodeJS + Express + SQLite

I created this project only as a study but I will make it available here, if you want to use it, feel free.

## Download

```bash
git clone https://github.com/ExodiumTeam/ApiCrudNodeSQLITE
```

Start with:

```bash
npm install #or yarn install
```

and

```bash
npm run dev # or yarn dev
```

## Comments

I separated the Routes by calling using the database functions as callback

```javascript
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
```

As a result, the database funcions look like this:

```javascript
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
```

© UserDev