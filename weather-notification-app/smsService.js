require('dotenv').config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const trialNumber = process.env.TRIAL_NUMBER;


const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const users = require('./users');
const w = require('./weather');

// takes in a string (10 digit phone number)
let askForZipCode = (phoneNumber) => {
    client.messages.create({
        to: phoneNumber,
        from: trialNumber,
        body: 'Please enter the zip code you would like to recieve data for'
    })
    .then(message => console.log(message.sid));
}

let returnWeatherInformation = (users) => {
    for (let i in users) {
        let zip = users[i].zipCode;
        let userNumber = users[i].phoneNumber;
        w.getMessageData(zip).then((responseToUser) => {
            client.messages.create({
                to: userNumber,
                from: trialNumber,
                body: responseToUser
            })
            .then(message => console.log(message.sid));
        })
    }
}

// let test = () => {
//     let User = users.User;
//     let user1 = new User('18453992443', '12580');
//     users.addUser(user1);
//     let user2 = new User('18455189455', '10001');
//     users.addUser(user2);
//     returnWeatherInformation(users.getUsers());
// }
// test();

module.exports.askForZipCode = askForZipCode;
module.exports.returnWeatherInformation = returnWeatherInformation;