var getRepos = require('./../js/get-repos.js').getRepos;

$(function() {
  $('#githubUsername').submit(function(event) {
    event.preventDefault();
    var username = $('#inputUsername').val();
    var repos = getRepos(username);
  });
});
