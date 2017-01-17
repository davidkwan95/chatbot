// This file is used for testing using cli and without webhooks
// Input sentence forever
// Output: Response

'use strict'

const prompt = require('prompt');
const Responser = require('../response/responser');

const responser = new Responser();

function ask() {
    prompt.get(['input'], function(err, result) {
        if (err) {
            console.log("Error", err);
        } else {
            var text = result.input;
            var response = responser.getResponse(text);
            console.log("Response:", response);
            ask();
        }
    });    
}

ask();