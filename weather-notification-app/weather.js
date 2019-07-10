require('dotenv').config();
const rpn = require('request-promise-native');

const app_id = process.env.WEATHER_APP_ID;
const app_code = process.env.WEATHER_APP_CODE;


let getMessageData = (zip) => {
    const link = `https://weather.api.here.com/weather/1.0/report.json?product=observation&zipcode=${zip}&oneobservation=true&app_id=${app_id}&app_code=${app_code}`;
    return rpn(link) 
        .then((body) => {
            let json = JSON.parse(body);
            let info = json.observations.location[0].observation[0];
            return `the high is ${cToFahr(info.highTemperature)}, the low is ${cToFahr(info.lowTemperature)}. The sky is ${info.skyDescription}.`
        })
        .catch((err) => {
            return 'bad value'
        });    
}

module.exports.getMessageData = getMessageData;

let cToFahr = (cTemp) => cTemp * 9 / 5 + 32;
