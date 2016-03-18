var getRepos = require('./../js/get-repos.js').getRepos;
var getUser = require('./../js/get-user.js').getUser;
var apiKey = require('./../.env').apiKey;

$(function() {
  $('#githubUsername').submit(function(event) {
    event.preventDefault();
    $('#repoList').empty();
    var username = $('#inputUsername').val();
    var user = getUser(username);
    var repos = getRepos(username);
    $('#username').show();
  });
});
