var micro = require("./lib/micro-express");
var app = micro();

app.get("/hello", function (req, res) {
  res.send("Hello Micro Express :)");
});

app.get("/bye", function (req, res) {
  res.send("Bye for now. More work tomorrow!!");
});

app.get("/walkaround", function (req, res) {
  res.redirect("/bye");
});

app.listen(3000);