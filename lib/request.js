var qs = require('qs');
var url = require('url');

// Extend request object.  Add params property to it.
// # hello?name="rajesh" => extract name="rajesh"
function request(req) {
  // qs.parse will return an object => {name: "rajesh"}
  req.params = qs.parse(url.parse(req.url).query);  //url.parse(self.req.url,true).query
}

module.exports = request;