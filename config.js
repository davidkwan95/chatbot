"use strict"

var exports = module.exports = {};

exports.BOT_NAME = "Myra";

// Facebook Page
exports.PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
exports.FACEBOOK_VERIFY_TOKEN = process.env.FACEBOOK_VERIFY_TOKEN;

// Google Calendar API
exports.GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
exports.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
exports.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
exports.GOOGLE_REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL;
exports.GOOGLE_ACCESS_TOKEN = process.env.GOOGLE_ACCESS_TOKEN;
exports.GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;
exports.GOOGLE_TOKEN_TYPE = 'Bearer';
exports.GOOGLE_EXPIRY_DATE= process.env.GOOGLE_EXPIRY_DATE;

Object.freeze(exports);
