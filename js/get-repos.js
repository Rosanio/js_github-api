var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&per_page=1000').then(function(response) {
    console.log(response);
    for(var i = 0; i < response.length; i++) {
      $('.repoList>ul').append('<li>' + response[i].name + '</li>');
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}
