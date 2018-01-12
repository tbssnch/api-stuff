var apikey = require('./../../.env').apikey;

function movieApi(userInput, success, failure) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=ad7316a6c030414b98077b1777454250&query=${userInput}`;
    request.onload = function() {
      if(this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };

    request.open('GET', url, true);
    request.send();
  });

  promise.then(function(response) {
    success(response);
  }, function(error) {
    failure(error);
  });
}

exports.movieModule = movieApi;
