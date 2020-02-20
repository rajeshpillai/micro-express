var http = require('http');

const PORT = process.env.PORT || 3000;

function MicroExpress() {
  var server = http.createServer(function (req, res) {
    let message = "Hello HTTP";
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', message.length);
    res.writeHead(200);
    res.end(message);
  });
  var listen = function (port) {
    server.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  }
  return {
    listen
  }
}

module.exports = MicroExpress;
