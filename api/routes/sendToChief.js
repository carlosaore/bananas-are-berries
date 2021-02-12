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

// Concatenate message
router.use(function (req, res, next) {
    req.message = `${req.body.name} sends this message to ${req.body.to}: ${req.body.message}`;
    next();
});

// Encode message
router.use(function (req, res, next) {
    // encode
    req.message = caesar(req.message, 7);
    //replace whitespace for %20 for the QR generator
    req.message = req.message.replace(/ /g,"%20");
    // save an url for twilio to send as image (QR generator)
    req.qr = `https://api.qrserver.com/v1/create-qr-code/?data=${req.message}&amp;size=100x100`; 
    next();
});

//POST to send message through twilio
router.post('/', function(req, res) {
    client.messages 
      .create({
         from: 'whatsapp:+14155238886',
         body: `Mailio message from ${req.body.name} to +34652568088`,
         to: 'whatsapp:+34652568088',
         mediaUrl: req.qr
       });
    res.status(200).json({message : "message sent"})
    }
)

module.exports = router;