var apiKey = require('./../.env').apiKey;
var addRepos = require('./../js/add-repos.js').addRepos;

exports.getRepos = function(username) {
  console.log(apiKey);
  //MAKE REQUEST TO GITHUB
  if(apiKey !== undefined) {
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&per_page=1000').then(function(response) {
      addRepos(response);
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  } else {
    $.get('https://api.github.com/users/' + username + '/repos?per_page=1000').then(function(response) {
      addRepos(response);
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  }
};
