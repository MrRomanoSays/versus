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
updateGame,
    getPlayers,
    getPlayer,
    addPlayer,
updatePlayer,

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

app.put('/games/:id', function(req, res, next) {
    updateGame(req.body, function(err, dalResponse) {
        if (err) return next(new HTTPError(err.status, err.messsge, err))
        res.status(200).send(dalResponse)
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

app.put('/players/:id', function(req, res, next) {
    updatePlayer(req.body, function(err, player) {
        if (err) return next(new HTTPError(err.status, err.message, err))
        res.status(200).send(player)
    })
})





/////////////////////////////////
/////////////////////////////////

app.use(function(err, req, res, next) {
    console.log(req.method, " ", req.path, "error:  ", err)
    res.status(err.status || 500)
    res.send(err)
})


app.listen(port, function() {
    console.log("API is up and running on port ", port)
})
