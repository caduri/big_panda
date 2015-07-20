var request = require('request');
var async = require('async');

module.exports = {
  getGithubStatus: function(res) {
      async.parallel([
        function(callback) {
          var url = "https://status.github.com/api/status.json";
          request(url, function(err, response, body) {
            if(err) { console.log(err); callback(true); return; }
            console.log(body);
            callback(false, JSON.parse(body));
          });
        },
        function(callback) {
          var url = "https://status.github.com/api/last-message.json";
          request(url, function(err, response, body) {
            if(err) { console.log(err); callback(true); return; }
            console.log(body);
            callback(false, JSON.parse(body));
          });
        },
        function(callback) {
          var url = "https://status.github.com/api/messages.json";
          request(url, function(err, response, body) {
            if(err) { console.log(err); callback(true); return; }
            console.log(body);
            callback(false, JSON.parse(body));
          });
        }
      ],
      function(err, results) {
        if(err) {
          console.log(err);
          res.send(500,"Server Error");
          return;
        }
        res.json({'status': results[0], 'last_message': results[1], 'messages': results[2]});
      }
    );
  }
};
