const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const user = require('./user');
const users = require('./users');
const sms = require('./smsService');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.post('/createUser', (req, res) => {
    let User = user.User;
    let phoneNumber = req.body.phoneNumber;
    console.log(`Phone number ${phoneNumber} added to database`); // not really a database
     
    // let newUser = new User(phoneNumber, null);
    // sms.askForZipCode(newUser);
    // users.addUser(newUser);    
    // res.sendStatus(200); 
});

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})