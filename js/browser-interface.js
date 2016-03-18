var getRepos = require('./../js/get-repos.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(function() {
  $('#githubUsername').submit(function(event) {
    event.preventDefault();
    var username = $('#inputUsername').val();
    var repos = getRepos(username);

  });
});
