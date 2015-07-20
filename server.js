// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var github     = require('./github')

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

router.get('/', function(req, res) {
  res.json({
    "status_url": "/status",
    "messages_url": "/messages",
    "last_message_url": "/last-message"
  });
});

router.get('/status', function(req, res) {
  github.redirectToGithub(res, "status.json");
});

router.get('/messages', function(req, res) {
  github.redirectToGithub(res, "messages.json");
});

router.get('/last-message', function(req, res) {
  github.redirectToGithub(res, "last-message.json");
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
