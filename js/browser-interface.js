var getRepos = require('./../js/get-repos.js').getRepos;
var getUser = require('./../js/get-user.js').getUser;
var apiKey = require('./../.env').apiKey;

$(function() {
  var user;
  var repos;
  var username;
  $('#githubUsername').submit(function(event) {
    event.preventDefault();
    $('#repoList').empty();
    $('.imageContainer').empty();
    $('#displayUsername').empty();
    $('#displayFollowers').empty();
    $('.userRepos').hide();
    username = $('#inputUsername').val();
    getUser(username);
  });
  $('#viewRepos').click(function() {
    getRepos(username);
    $('.userRepos').show();
  });
});
