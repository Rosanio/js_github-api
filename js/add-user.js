exports.addUser = function(response) {
  if(response.name !== null) {
    if(response.name.length > 0) {
      $('#displayUsername').append('<a href=' + response.html_url + '>' + response.name + '</a>');
    } else {
      $('#displayUsername').text(response.login);
    }
  }
  $('.imageContainer').append('<img src=' + response.avatar_url + '>');
  if(response.email !== null) {
    if(response.email.length > 0) {
      $('#displayEmail').text(response.email);
    }
  }
  $('#displayFollowers').append('<strong>Followers: </strong>' + response.followers);
  $('.userInfo').show();
}
