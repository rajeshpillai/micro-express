var micro = require("./lib/micro-express");
var app = micro();

app.get("/hello", function (req, res) {
  http://localhost:3000/hello?user[name]=rajesh&user[city]=mumbai
  res.send("Hello Micro Express " + req.params["user"]["name"] + " " + req.params["user"]["city"]);
});

app.get("/bye", function (req, res) {
  res.send("Bye for now. More work tomorrow!!");
});

app.get("/walkaround", function (req, res) {
  res.redirect("/bye");
});

app.listen(3000);