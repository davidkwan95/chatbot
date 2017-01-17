'use strict'

const request = require('request');
const config = require('../config');
const combiner = require('./combiner');

var randomize = function(items) {
    return items[Math.floor(Math.random() * items.length)];
}

class Responser {
    constructor() {}
    
    sendTextMessage(sender, text) {
        let messageData = { text:text }
        request({
            url: 'https://graph.facebook.com/v2.6/me/messages',
            qs: {access_token: config.PAGE_ACCESS_TOKEN},
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
    
    getResponse(text) {
        var lowerCasedText = text.toLowerCase();
        let response = "";
        if (lowerCasedText === "❤") { // return love
            response = "❤";
        }
        if (!response) {
            response = randomize(combiner.getResponses(lowerCasedText));
        }
        return response;
    }
    
    // Get response and send message
    respond(sender, text) {
        var response = this.getResponse(text);
        this.sendTextMessage(sender, response);
    }
}

module.exports = Responser;