var movieApi = require('./../src/js/maps.js').movieModule;

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    let userInput = $('#user-input').val();
    const movie = movieApi(userInput, success, failure);
  });
});
function success(response) {
  let body = JSON.parse(response);
  console.log(body.results[0]);
}

function failure() {
  console.log('Giving up');
}
