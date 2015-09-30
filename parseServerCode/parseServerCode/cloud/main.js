
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

var client = require('cloud/apiClient.js');

Parse.Cloud.define("test", function(request, response) {
  client.getEsculturas({
    lat: "10",
    lon: "10"
  }).then(funtion(httpResponse) {
    response.success("success client call");
  }, function(httpResponse) {
    console.error(httpResponse);
    response.error("Uh oh, something went wrong in client call");
  });
})
