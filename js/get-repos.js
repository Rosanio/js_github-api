var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&per_page=1000').then(function(response) {
    console.log(response);
    for(var i = 0; i < response.length; i++) {
      $('.repoList>dl').append('<dt>' + response[i].name + '</dt>');
      if(response[i].description !== null) {
        if(response[i].description.length > 0) {
          $('.repoList>dl').append('<dd>' + response[i].description + '</dd>');
        }
      }
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
