// This file is used to combine all contexts checking and get appropriate responses

'use strict'

var dontUnderstand = require('./contexts/dont-understand');
var greetings = require('./contexts/greetings');


// will return
const CONTEXTS_TO_BE_CHECKED = [
    greetings,
]

var getResponses = function(text) {
    let responses = null;
    for (var i = 0; !responses && i < CONTEXTS_TO_BE_CHECKED.length; i++) {
        responses = CONTEXTS_TO_BE_CHECKED[i].check(text);
    }
    if (!responses) {
        responses = dontUnderstand.DONT_UNDERSTAND_RESPONSES;
    }
 
    return responses;
}

module.exports = { getResponses };