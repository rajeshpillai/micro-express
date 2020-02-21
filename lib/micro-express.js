var http = require('http');
var routes = require("./routes");
var response = require("./response");
var request = require("./request");
var url = require("url");

function MicroExpress() {
  var server = http.createServer(function (req, res) {
    response(res); // Add helper methods
    request(req);
    console.log(`Navigating to ${req.url}`);
    let match = routes.match(req);
    if (match) {
      req.params = match.params;
      if (req.method == "POST") {
        _onPost(req, res, function postComplete(req, res) {
          //console.log(`Finished processing ${method}.`);
          match.handler(req, res);
        });
      } else {
        match.handler(req, res);
      }
    } else {
      res.writeHead(200);
      res.end("Route not found!");
    }
  });

  function _onPost(req, res, onComplete) {
    let postedData = "";
    req.on("data", (chunk) => {
      postedData += chunk;
    });

    req.on("end", () => {
      req.rawBody = postedData;

      //TODO: NEED WORK HERE
      if (postedData && postedData.indexOf('{') > -1) {
        req.body = JSON.parse(postedData);
      } else {
        req.body = postedData;
      }
      onComplete(req, res);
    });
  }

  var listen = function (port) {
    server.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  }
  return {
    listen,
    get: routes.get,
    post: routes.post,
  }
}

module.exports = MicroExpress;
