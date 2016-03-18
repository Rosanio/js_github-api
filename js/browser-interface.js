var apiKey = require('./../.env').apiKey;

$(function() {
  console.log(apiKey);
  $.get('https://api.github.com/users/Rosanio/repos?access_token=' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
});
