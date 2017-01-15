'use strict'

const PAGE_ACCESS_TOKEN = "EAAJHHZBCyREsBAInGqYU3YAxPGltYvf7P3JLCEEWJlTxnDBerHTrmMG7hFKJBm5zi3wfWl9ertdmnfq19HOJUmDUTGueiV6pcu4ZBiPWps4yr58Irbou6Oju0iA3ypT75ztXvl6iRB0JtzxNljuKmXwwp6IqYShTy5gggIuQZDZD";
const request = require('request');
const combiner = require('./combiner');

var randomize = function(items) {
    return items[Math.floor(Math.random() * items.length)];
}

class Responser {
    constructor() {
        
    }
    
    sendTextMessage(sender, text) {
        let messageData = { text:text }
        request({
            url: 'https://graph.facebook.com/v2.6/me/messages',
            qs: {access_token: PAGE_ACCESS_TOKEN},
            method: 'POST',
            json: {
                recipient: {id:sender},
                message: messageData,
            }
        }, function(error, response, body) {
            if (error) {
                console.log('Error sending messages: ', error)
            } else if (response.body.error) {
                console.log('Error: ', response.body.error)
            }
        })
    }
    
    respond(sender, text) {
        text = text.toLowerCase();
        let response = "";
        if (text === "❤") { // return love
            response = "❤";
        }
        if (!response) {
            response = randomize(combiner.getResponses(text));
        }
        this.sendTextMessage(sender, response);
    }
}

module.exports = Responser;