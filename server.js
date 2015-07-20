var express    = require('express');
var app        = express();
var morgan     = require('morgan');
var github     = require('./github')

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

var router = express.Router();

router.get('/github', function(req, res) {
  github.getGithubStatus(res);
});

app.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});

app.use('/', router);

app.listen(port);
console.log('Big Panda excersize starts on port ' + port);
