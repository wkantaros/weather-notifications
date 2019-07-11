const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const users = require('./users');
const sms = require('./smsService');
const w = require('./weather');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const schedule = require('node-schedule');
const PORT = process.env.PORT || 5000;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.post('/createUser', (req, res) => {
    let phoneNumber = req.body.phoneNumber;
    console.log(`Sending text to ${phoneNumber}`); 
    sms.askForZipCode(phoneNumber);
    res.send();
});

app.post('/sms', (req, res) => {
    console.log('here kinda!');
    
    let User = users.User;
    let phoneNumber = req.body.From;
    let zipcode = req.body.Body;

    let newUser = new User(phoneNumber, zipcode);
    users.addUser(newUser);
    console.log(`Phone number ${phoneNumber} with zipcode ${zipcode} added to database`); // not really a database


    const twiml = new MessagingResponse();
    console.log('here!');
    
    // twiml.message(`Thanks! You will now get weather information for the ${zipcode}`);
    console.log('here baud');
    
    res.writeHead(200, {
        'Content-Type': 'text/xml'
    });
    res.end(twiml.toString());
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    // var j = schedule.scheduleJob('*/2 * * * *', () => {
    //     console.log(users.getUsers());
    //     sms.returnWeatherInformation(users.getUsers());
    // });
    var j = schedule.scheduleJob({hour: 11, minute: 6}, () => {
        console.log(users.getUsers());
        sms.returnWeatherInformation(users.getUsers());
    });
    // var j = schedule.scheduleJob('0 6 * * *', () => {
    //     console.log(users.getUsers());
    //     sms.returnWeatherInformation(users.getUsers());
    // });
});