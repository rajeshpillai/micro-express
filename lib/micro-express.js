var http = require('http');
var routes = require("./routes");


function MicroExpress() {
  var server = http.createServer(function (req, res) {
    let handler = routes.match(req);
    if (handler) {
      handler(req, res);
    } else {
      res.writeHead(200);
      res.end("Route not found!");
    }
  });
  var listen = function (port) {
    server.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  }
  return {
    listen,
    get: routes.get
  }
}

module.exports = MicroExpress;
