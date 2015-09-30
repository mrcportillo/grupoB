Parse.Cloud.define("getEsculturas", function(request, response)) {
  Parse.Cloud.httpRequest({
    url: 'http://resistenciarte.org/api/v1/closest_nodes_by_coordhttp://resistenciarte.org/api/v1/closest_nodes_by_coord',
    headers: {}
    params: {
      lat: request.params.lat,
      lon: request.params.lon,
      dist: '500'
    }
  }).then(function(httpResponse) {
    if (options && options.success) {
      options.success(httpResponse);
    }
  }, function(httpResponse) {
    if (options && options.error) {
      options.error(httpResponse);
    }
  });
}
