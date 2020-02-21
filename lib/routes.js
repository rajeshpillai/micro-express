var url = require('url');

function routes() {
  let route_handlers = [];

  let get = function (path, handler) {
    route_handlers.push({
      method: "GET",
      path: path,
      handler: handler
    });
  }

  let post = function (path, handler) {
    route_handlers.push({
      method: "POST",
      path: path,
      handler: handler
    });
  }

  let match_path = function (route, path, req) {
    // return true if route.path == path
    let path_array = path.split("/");
    let route_array = route.path.split("/");
    let match = true;
    let url_params = {};

    for (let i = 0; i < route_array.length; i++) {
      let r = route_array[i];
      let p = path_array[i];
      if (r[0] == ":") {
        url_params[r.substr(1)] = p;
      } else if (r == "*") { // no need to match any further routes
        break;
      } else if (r !== p) {
        match = false;
        break;
      }
    }
    if (match) {
      return {
        params: url_params,
        handler: route.handler
      }
    } else {
      return false;
    }
  }

  let match = function (req) {
    // var handler = route_handlers[req.url];
    //var handler = route_handlers[url.parse(req.url).pathname];
    let path = url.parse(req.url).pathname;
    let result = false;
    console.log("route table: ", route_handlers);
    for (let i = 0; i < route_handlers.length; i++) {
      let route = route_handlers[i];
      // check if the method mathches i.e. GET == GET and POST == POST etc...
      if (route.method !== req.method) continue;
      result = match_path(route, path, req);
      if (result != false) {
        console.log("FOUND: ", req.params);
        req.qs = req.params;
        break; // break on first matching route
      }
    }
    return result;
  }

  return {
    get: get,
    post: post,
    match: match
  }
}

module.exports = routes();