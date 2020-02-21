var micro = require("./lib/micro-express");
var app = micro();

// POST support
app.get("/post", function (req, res) {
  res.html(`
    <form method="POST">
      <input type="text" name="username" placeholder="enter username" />
      <button type="submit">submit</button>
    </form>
  `);
});

app.post("/post", function (req, res) {
  res.send("OK : " + req.body);
});

// Add dynamic parameter
app.get("/ping/:ip", function (req, res) {
  res.send(`Pinging ${req.params.ip}`);
});

app.get("/hello", function (req, res) {
  // http://localhost:3000/hello?user[name]=rajesh&user[city]=mumbai
  res.send("Hello Micro Express " + req.qs["user"]["name"] + " " + req.qs["user"]["city"]);
});

app.get("/bye", function (req, res) {
  res.send("Bye for now. More work tomorrow!!");
});

app.get("/walkaround", function (req, res) {
  res.redirect("/bye");
});

app.listen(3000);