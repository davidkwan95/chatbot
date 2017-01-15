// This file is used to combine all collections and get responses

'use strict'

var dontUnderstand = require('./collections/dont-understand');
var greetings = require('./collections/greetings');


// will return
const COLLECTIONS_TO_BE_CHECKED = [
    greetings,
]

var getResponses = function(text) {
    let responses = null;
    for (var i = 0; !responses && i < COLLECTIONS_TO_BE_CHECKED.length; i++) {
        responses = COLLECTIONS_TO_BE_CHECKED[i].check(text);
    }
    if (!responses) {
        responses = dontUnderstand.DONT_UNDERSTAND_RESPONSES;
    }
 
    return responses;
}

module.exports = { getResponses };