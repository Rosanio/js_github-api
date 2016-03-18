var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&per_page=1000').then(function(response) {
    console.log(response);
    for(var i = 0; i < response.length; i++) {
      $('.repoList>dl').append('<dt>' + response[i].name + '</dt>');
      var date = response[i].created_at.substring(0,10);
      var time = response[i].created_at.substring(11,19);
      var dateAndTime = date + ' ' + time;
      var momentDateTime = moment(dateAndTime).subtract(7, 'hours').format('MM/DD/YYYY hh:mm:ss a');
      console.log(dateAndTime)
      console.log(momentDateTime);
      $('.repoList>dl').append('<dd>Created at ' + momentDateTime + '</dd>');
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
