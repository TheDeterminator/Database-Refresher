const express = require('express')
const server = express()
const db = require('./db')

server.use(express.json())


server.get('/', function(req, res) {
    res.send('server is working')
})

server.get('/dc', function(req, res) {
    db('memberz').then(next => res.json(next)).catch(err => console.log(err))
})


server.listen(3000, function() {console.log(`Server listening on port 3000`)})

// let bed = require('./backend_data.json')

// console.log(bed)