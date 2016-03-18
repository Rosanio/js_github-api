var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username) {

  //MAKE REQUEST TO GITHUB

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&per_page=1000').then(function(response) {
    console.log(response);
    //LIST THROUGH EACH REPO OBJECT

    for(var i = 0; i < response.length; i++) {

      //DISPLAY NAME

      $('#repoList').append('<dt><a href=' + response[i].html_url + '>' + response[i].name + '</a></dt>');

      //GRAB THE DATE AND TIME

      var date = response[i].created_at.substring(0,10);
      var time = response[i].created_at.substring(11,19);
      var dateAndTime = date + ' ' + time;

      //CONVERT DATE AND TIME TO AM/PM AND FROM GMT TO PACIFIC TIME ZONE USING FORMAT AND SUBTRACT METHODS, RESPECTIVELY

      var momentDateTime = moment(dateAndTime).subtract(7, 'hours').format('MM/DD/YYYY hh:mm:ss a');
      $('#repoList').append('<dd><strong>Created: </strong>' + momentDateTime + '</dd>');

      //LIST DESCRIPTION IF ONE EXISTS

      if(response[i].description !== null) {
        if(response[i].description.length > 0) {
          $('#repoList').append('<dd><strong>Description: </strong>' + response[i].description + '</dd>');
        }
      }
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
