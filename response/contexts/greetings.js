'use strict'

var exports = module.exports = {}

// List of keywords
const NORMAL_GREETINGS_KEYWORDS = [
    "hi", "hello", "hey", "greetings"
];

// List of response
const NORMAL_GREETINGS_RESPONSES = [
    "Hi there",
    "Hey",
    "Hello"
];

// return greetings with appropriate time
var checkAndGetTime = function(text) {
    const AVAILABLE_TIMES = ['morning', 'afternoon', 'evening'];
    // Filter punctuation
    var filtered_text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var splitted_text = filtered_text.split(" ");
    let time_index = -1;
    for (var i in AVAILABLE_TIMES) {
        time_index = splitted_text.indexOf(AVAILABLE_TIMES[i]);
        if (time_index >= 0) {
            break;
        }
    }
    
    let time = "";
    if (!splitted_text[time_index+1]) {
        time = splitted_text[time_index];
    }
    if (!time) {
        // If index > 0, followed by name or preceeded by good
        if (time_index > 0 && splitted_text[time_index - 1] === 'good') {
            time = splitted_text[time_index];
        } else if (time_index === 0 && splitted_text[time_index+1] === 'myra') {
            time = splitted_text[time_index];
        }   
    }
    
    if (time) {
        return `Good ${time}!`;
    }
}

var check = function(text) {
    // Check if user specified time (morning, etc) in greetings, if so, reply the same
    // TODO: Check if specified time is correct
    var response = checkAndGetTime(text);
    if (response) {
        return [response];
    }
    
    for (var i in NORMAL_GREETINGS_KEYWORDS) {
        if (text.indexOf(NORMAL_GREETINGS_KEYWORDS[i]) >= 0) {
            return NORMAL_GREETINGS_RESPONSES;
        }
    }
}

module.exports = {check};