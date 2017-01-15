/* eslint-env node */
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const responser = require('./response/responser.js')
const app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot')
})

// for Facebook verification
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === 'my-waifu-is-calling') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

app.post('/webhook/', function (req, res) {
    let messaging_events = req.body.entry[0].messaging
    for (let i = 0; i < messaging_events.length; i++) {
        let event = req.body.entry[0].messaging[i]
        let sender = event.sender.id
        if (event.message && event.message.text) {
            let text = event.message.text
            responser.sendTextMessage(sender, "For now, I will always response with Hello")
        }
    }
    res.sendStatus(200)
})

const PAGE_ACCESS_TOKEN = "EAAJHHZBCyREsBAInGqYU3YAxPGltYvf7P3JLCEEWJlTxnDBerHTrmMG7hFKJBm5zi3wfWl9ertdmnfq19HOJUmDUTGueiV6pcu4ZBiPWps4yr58Irbou6Oju0iA3ypT75ztXvl6iRB0JtzxNljuKmXwwp6IqYShTy5gggIuQZDZD"

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})