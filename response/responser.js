const PAGE_ACCESS_TOKEN = "EAAJHHZBCyREsBAInGqYU3YAxPGltYvf7P3JLCEEWJlTxnDBerHTrmMG7hFKJBm5zi3wfWl9ertdmnfq19HOJUmDUTGueiV6pcu4ZBiPWps4yr58Irbou6Oju0iA3ypT75ztXvl6iRB0JtzxNljuKmXwwp6IqYShTy5gggIuQZDZD"

var exports = module.exports = {};
exports.sendTextMessage = function(sender, text) {
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