var micro = require("./lib/micro-express");
var app = micro();

app.get("/hello", function (req, res) {
  let message = "Hello Micro Express :)";
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', message.length);
  res.writeHead(200);
  res.end(message);
});

app.get("/bye", function (req, res) {
  let message = "Bye for now. See you agin :)";
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', message.length);
  res.writeHead(200);
  res.end(message);
});

app.listen(3000);