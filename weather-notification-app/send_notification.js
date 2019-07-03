require('dotenv').config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const trialNumber = process.env.TRIAL_NUMBER;

const client = require('twilio')(accountSid, authToken);

const eveNum =  '+‭18453992443‬';
const willNum = '+18455189455';

client.messages
    .create({
        body: `test env`,
        from: trialNumber,
        to: willNum
    })
    .then(message => console.log(message.sid));