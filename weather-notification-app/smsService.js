require('dotenv').config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const trialNumber = process.env.TRIAL_NUMBER;

const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;


const users = require('./users');
const User = require('./user');

let askForZipCode = (user) => {
    console.log(`Number: ${user.phoneNumber}`);
    client.messages.create({
        to: `+18455189455`,
        from: trialNumber,
        body: 'Hi there! Please text us your zip code so we can send you weather information about the area' 
    })
    .then(message => console.log(message.sid));
}

module.exports.askForZipCode = askForZipCode;

// client.messages
//     .create({
//         body: `test env`,
//         from: trialNumber,
//         to: willNum
//     })
//     .then(message => console.log(message.sid));