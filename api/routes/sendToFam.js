require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router()
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const bodyParser = require('body-parser');
const caesar = require('./caesar');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Check for auth to use server

//Check that it's a POST request

// Check that body is not empty
router.use(function (req, res, next) {
    if (req.body === undefined) {
        res.status(400).json({
            error : "Empty body on POST request"
        });
        return
    };
    next();
});

// Check that body contains required key-values
router.use(function (req, res, next) {
    if (!req.body.name || !req.body.to || !req.body.message) {
        res.status(400).json({
            error : "missing data"
        });
        return
    };
    next();
});

// Check that required key-values contains correct data
// "name" will always be a string but "to" needs to be a phone number in twilio syntax
// Marc, give us points for the regex, I coded it meself ;)
router.use(function (req, res, next) {
    const regex = new RegExp("(whatsapp:\+)(\d*)");
    if (!regex.test(req.body.to)) {
        res.status(400).json({
            error : "incorrect data"
        });
        return
    };
    next();
});

// Decode message
router.use(function (req, res, next) {
    req.message = caesar(req.body.message, -7);
    next();
});

//POST to send message through twillio
router.post('/', function(req, res) {
    client.messages 
      .create({
         from: 'whatsapp:+14155238886',
         body: `${req.body.name} sends you this message: ${req.message}`,
         to: req.body.to
       });
    res.status(200).json({message : "message sent"})
    }
)

module.exports = router;