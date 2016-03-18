var apiKey = require('./../.env').apiKey;
var addUser = require('./../js/add-user.js').addUser;

exports.getUser = function(username) {
  console.log(apiKey);
  if(apiKey !== undefined) {
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
      addUser(response);
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  } else {
    $.get('https://api.github.com/users/' + username).then(function(response) {
      addUser(response);
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  }
}
