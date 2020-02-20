var url = require('url');

function routes() {
  let route_handlers = {};

  let get = function (path, handler) {
    route_handlers[path] = handler;
  }

  let match = function (req) {
    // var handler = route_handlers[req.url];
    var handler = route_handlers[url.parse(req.url).pathname];
    return handler
  }

  return {
    get: get,
    match: match
  }
}

module.exports = routes();