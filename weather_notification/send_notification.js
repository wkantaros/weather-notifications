const accountSid = 'AC1c4b6f56dc610ebd9a1bac37523f2d51';
const authToken = '9826dfdd52ef25cc2ade67f6637529b7';
const trialNumber = '+18452187873';

const client = require('twilio')(accountSid, authToken);

const eveNum =  '+‭18453992443‬';
const willNum = '+18455189455';

client.messages
    .create({
        body: `the free trial is $15 tho so ima just run the free trial till it dies i think`,
        from: trialNumber,
        to: willNum
    })
    .then(message => console.log(message.sid));