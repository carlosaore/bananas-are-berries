require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router()
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const bodyParser = require('body-parser');
const caesar = require('./caesar');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// This Route is when a family member uses the app to send a message
// to a bob. It is first encoded in the frontend and the server sends it
// to the chief's whatsapp as a QR code that has encoded text.
// The message written by the family member must be in body.to.
// Then, the Bob, on the frontside will use the app to scan the code and will
// get the encoded text, decode it in the frontend and see the message.

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
            error : "Missing data. Body must include \"name\", \"to\", and \"message\" "
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
            error : "Phone number must be provided in correct sintax. Example: whatsapp:+346525600000"
        });
        return
    };
    next();
});

// Concatenate messages (one for whatsapp and the other one for the QR that contains the actual message)
router.use(function (req, res, next) {
    const phoneNumber = req.body.to.replace(/\D/g,"")
    req.whatsappMessage = `*${req.body.name}* sends this message to *+${phoneNumber}*`;
    req.qrMessage = `${req.body.name} sends this message to ${phoneNumber}: ${req.body.message}`;
    next();
});

// Encode message
router.use(function (req, res, next) {
    // encode
    req.qrMessage = caesar(req.qrMessage, 7);
    //replace whitespace for %20 for the QR generator
    req.qrMessage = req.qrMessage.replace(/ /g,"%20");
    // save an url for twilio to send as image (QR generator)
    req.qr = `https://api.qrserver.com/v1/create-qr-code/?data=${req.qrMessage}&amp;size=100x100`; 
    next();
});

//POST to send message through twilio
router.post('/', function(req, res) {
    client.messages 
      .create({
         from: 'whatsapp:+14155238886',
         body: req.whatsappMessage,
         to: req.body.to,
         mediaUrl: req.qr
       });
    res.status(200).json({message : "message sent"})
    }
)

module.exports = router;