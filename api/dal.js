const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const couch_base_uri = "http://localhost:5984/"
const couch_dbname = "versus"
const db = new PouchDB(couch_base_uri + couch_dbname)
const { map, uniq, prop, omit, compose, drop, replace } = require('ramda')


/////////////////////
////  games
/////////////////////

function getGames(cb) {
  db.allDocs({
    include_docs: true,
    start_key: "game_",
    end_key: "game_\uffff"
  }, function (err, res) {
    if (err) return cb(err)
    cb(null, (map(obj=> omit("type", obj.doc), res.rows)))
  })
}

function getGame(gameId, cb) {
    db.get(gameId, function(err, doc) {
        if (err) return cb(err)
        cb(null, doc)
    })
}


function addGame(game, cb) {


    db.put(game, function(err, res) {
        if (err) return cb(err)
        cb(null, res)
    })
}

function updateGame(game, cb) {
    db.put(game, function(err, res) {
        if (err) return cb(err)
        cb(null, res)
    })
}

//EXAMPLE FROM POUCHDB SITE:
db.get('mydoc', function(err, doc) {
  if (err) { return console.log(err); }
  db.put({
    _id: 'mydoc',
    _rev: doc._rev,
    title: "Let's Dance"
  }, function(err, response) {
    if (err) { return console.log(err); }
    // handle response
  });
});


/////////////////////
////  players
/////////////////////

function getPlayers(cb) {
  db.allDocs({
    include_docs: true,
    start_key: "player_",
    end_key: "player_\uffff"
  }, function (err, res) {
    if (err) return cb(err)
    cb(null, (map(obj=> omit("type", obj.doc), res.rows)))
  })
}

function getPlayer(playerId, cb) {
    db.get(playerId, function(err, doc) {
        if (err) return cb(err)
        cb(null, doc)
    })
}


function addPlayer(player, cb) {
    player.type = "player"
    player.created = new Date().toISOString()
    let newId = `player_${player.user_id}`
    player._id = prepID(newId)

    db.put(player, function(err, res) {
        if (err) return cb(err)
        cb(null, res)
    })
}


function updatePlayer(player, cb) {
    db.put(player, function(err, res) {
        if (err) return cb(err)
        cb(null, res)
    })
}


/////////////////////////
////  HELPER FUNCTIONS
////////////////////////

function prepID(id) {
  return id.replace(/ /g, "_")
}





const returnDoc = row => row.doc

const dal = {
    getGames: getGames,
    addGame: addGame,
    getGame: getGame,
    updateGame: updateGame,
    getPlayers: getPlayers,
    getPlayer: getPlayer,
    addPlayer: addPlayer,
    updatePlayer: updatePlayer
}

module.exports = dal
