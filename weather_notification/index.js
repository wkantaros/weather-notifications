const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const user = require('./user');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.post('/createUser', (req, res) => {
    user
        .createUser({
            number: req.body.number
        })
        .then(() => res.sendStatus(200))
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
});