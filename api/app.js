if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const dalModule = process.env.DAL || 'nosql';
const dal = dalModule === 'nosql' ? 'dal.js' : 'dal-mysql.js'
const { split } = require('ramda')

const jwt = require('express-jwt')
const cors = require('cors')

app.use(cors({credentials: true}))

app.use(jwt({
  secret: process.env.AUTH0_SECRET
}))

app.get('/test', (req, res) => res.send('You are authorized!!!'))

const {
    getGames,
    getGame,
    addGame,

    getPlayers,
    getPlayer,
    addPlayer,



    getMed,
    getUniqueForms,
    listMedsByLabel,
    getUniqueIngredients,
    listMedsByIngredient,
    listMedsByForm,
    updatePharmacy,
    addPharmacy,
    getPharmacy,
    listPharmacies,
    deletePharmacy,
    addPatient,
    getPatients,
    listPatientsByLastName,
    getUniqueConditions,
    listPatientsByCondition,
    updatePatient,
    deletePatient,
    getPatient,
    addMed,
    updateMed,
    deleteMed
} = require('./' + dal)





const bodyParser = require('body-parser')
app.use(bodyParser.json())


const HTTPError = require('node-http-error')
const port = process.env.PORT || 8082



//////////////////
/////  TESTING
//////////////////

app.get('/', function(req, res) {
    res.send('Welcome to the Versus API!')
})

///////////////////////
//   games
//////////////////////

app.get('/games', function(req, res, next) {
    getGames(function(err, resp) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(resp)
    })
})

app.get('/games/:id', function(req, res, next) {
    getGame(req.params.id, function(err, resp) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(resp)
    })
})

app.post('/games', function(req, res, next) {
    addGame(req.body, function(err, resp) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(201).send(resp)
    })
})

///////////////////////
//   players
//////////////////////

app.get('/players', function(req, res, next) {
    getPlayers(function(err, resp) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(resp)
    })
})

app.get('/players/:id', function(req, res, next) {
    getPlayer(req.params.id, function(err, resp) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(resp)
    })
})

app.post('/players', function(req, res, next) {
    addPlayer(req.body, function(err, resp) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(201).send(resp)
    })
})






///////////////////////
//   medications
//////////////////////

app.get('/medications', function(req, res, next) {
    if (req.query.filter && split(':', req.query.filter)[0].toLowerCase() === 'ingredient') {
        const result = split(':', req.query.filter)
        listMedsByIngredient(result[1], function(err, meds) {
            if (err) return next(new HTTPError(err.status, err.message, err))
            res.status(200).send(meds)
        })
    } else if (req.query.filter && split(':', req.query.filter)[0].toLowerCase() === 'form') {
        const result = split(':', req.query.filter)
        listMedsByForm(result[1], function(err, meds) {
            if (err) return next(new HTTPError(err.status, err.message, err))
            res.status(200).send(meds)
        })
    } else if (!req.query.filter) {
        const startkey = req.query.startkey ? req.query.startkey : undefined
        const limit = req.query.limit ? req.query.limit : undefined
        listMedsByLabel(startkey, limit, function(err, meds) {
            console.log(startkey + " " + limit) //working...
            if (err) return next(new HTTPError(err.status, err.message, err))
            res.status(200).send(meds)
          })
    } else {
        res.status(200).send([])
    }
})

app.post('/medications', function(req, res, next) {
    addMed(req.body, function(err, dalResponse) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(201).send(dalResponse)
    })
})

app.put('/medications/:id', function(req, res, next) {
    updateMed(req.body, function(err, dalResponse) {
        if (err) return next(new HTTPError(err.status, err.messsge, err))
        res.status(200).send(dalResponse)
    })
})

app.get('/medications/:id', function(req, res, next) {
    getMed(req.params.id, function(err, dalResponse) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(dalResponse)
    })
})

app.delete('/medications/:id', function(req, res, next) {
    deleteMed(req.params.id, function(err, dalResponse) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(dalResponse)

    })
})


app.get('/medications/ingredients', function(req, res, next) {
    getUniqueIngredients(function(err, ingredients) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(ingredients)
    })
})

app.get('/medications/forms', function(req, res, next) {
    getUniqueForms(function(err, forms) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(forms)
    })
})

///////////////////////
//   patients
//////////////////////

app.post('/patients', function(req, res, next) {
    addPatient(req.body, function(err, dalResponse) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(201).send(dalResponse)
    })
})


app.get('/patients', function(req, res, next) {
    if (req.query.filter && split(':', req.query.filter)[0].toLowerCase() === 'lastname') {
        const result = split(':', req.query.filter)
        listPatientsByLastName(result[1], function(err, patient) {
            if (err) return next(new HTTPError(err.status, err.message, err))
            res.status(200).send(patient)
        })
    } else if (req.query.filter && split(':', req.query.filter)[0].toLowerCase() === 'condition') {
        const result = split(':', req.query.filter)
        listPatientsByCondition(result[1], function(err, patient) {
            if (err) return next(new HTTPError(err.status, err.message, err))
            res.status(200).send(patient)
        })
    } else if (!req.query.filter) {

        getPatients(function(err, patients) {
            if (err) return next(new HTTPError(err.status, err.message, err))
            res.status(200).send(patients)
        })
    } else {

        return res.status(200).send([])
    }
})

app.get('/patients/conditions', function(req, res, next) {
    getUniqueConditions(function(err, conditions) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(conditions)
    })
})

app.put('/patients/:id', function(req, res, next) {
    updatePatient(req.body, function(err, dalResponse) {
        if (err) return next(new HTTPError(err.status, err.messsge, err))
        res.status(200).send(dalResponse)
    })
})

app.get('/patients/:id', function(req, res, next) {
    getPatient(req.params.id, function(err, resp) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(resp)
    })
})

app.delete('/patients/:id', function(req, res, next) {
    deletePatient(req.params.id, function(err, person) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(person)

    })
})







///////////////////////
//   pharmacies
//////////////////////

app.put('/pharmacies/:id', function(req, res, next) {
    updatePharmacy(req.body, function(err, pharmacy) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(pharmacy)
    })
})

app.post('/pharmacies', function(req, res, next) {
    addPharmacy(req.body, function(err, docs) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(201).send(docs)
    })
})

app.get('/pharmacies/:id', function(req, res, next) {
    getPharmacy(req.params.id, function(err, returnedPharmacy) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(returnedPharmacy)
    })
})

// app.get('/pharmacies', function(req, res, next) {
//   const startKey = req.query.startkey ? req.query.startkey : undefined
//   const limit = req.query.limit ? req.query.limit : undefined
//
//   listPharmacies(startKey, limit, function(err, pharmacyList) {
//     if (err) return next(new HTTPError(err.status, err.message, err))
//     res.status(200).send(pharmacyList)
//   })
// })

app.get('/pharmacies', function(req, res, next) {
    if (req.query.filter && split(':', req.query.filter)[0].toLowerCase() === 'chainname') {
        const result = split(':', req.query.filter)
        listPharmaciesByChainName(result[1], function(err, chain) {
            if (err) return next(new HTTPError(err.status, err.message, err))
            res.status(200).send(chain)
        })
    } else if (req.query.filter && split(':', req.query.filter)[0].toLowerCase() === 'storename') {
        const result = split(':', req.query.filter)
        listPharmaciesByStoreName(result[1], function(err, store) {
            if (err) return next(new HTTPError(err.status, err.message, err))
            res.status(200).send(store)
        })
    } else if (!req.query.filter) {
        const startKey = req.query.startkey ? req.query.startkey : undefined
        const limit = req.query.limit ? req.query.limit : undefined

        listPharmacies(startKey, limit, function(err, pharmacyList) {
          if (err) return next(new HTTPError(err.status, err.message, err))
          res.status(200).send(pharmacyList)
        })
    } else {
        return res.status(200).send([])
        }
})


app.delete('/pharmacies/:id', function(req, res, next) {
    deletePharmacy(req.params.id, function(err, doc) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(doc)
    })
})




//USE THIS IN VERSUS
app.use(function(err, req, res, next) {
    console.log(req.method, " ", req.path, "error:  ", err)
    res.status(err.status || 500)
    res.send(err)
})
//USE THIS IN VERSUS
app.listen(port, function() {
    console.log("API is up and running on port ", port)
})
