function routes() {
  let route_handlers = {};

  let get = function (path, handler) {
    route_handlers[path] = handler;
  }

  let match = function (req) {
    var handler = route_handlers[req.url];
    return handler;
  }

  return {
    get: get,
    match: match
  }
}

module.exports = routes();