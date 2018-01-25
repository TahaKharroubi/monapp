

'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
app.set('port', (process.env.PORT || 5000))

app.get('/', function (req, res) { 
res.send('Hello from my Boot')
})

app.get('/webhook/', function (req, res)
 { 
  if (req.query['hub.verify_token'] === 'taha') {  res.send(req.query['hub.challenge']) } else {  res.send('Error, wrong token') }})

app.listen(app.get('port'), function() { 
console.log('running on port', app.get('port'))
})
