(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const apikey = 'ad7316a6c030414b98077b1777454250';
exports.apikeyModule = apikey;

},{}],2:[function(require,module,exports){
'use strict';

var apikey = require('./../../.env').apikey;

function movieApi(userInput, success, failure) {
  var promise = new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    var url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=ad7316a6c030414b98077b1777454250&query=' + userInput;
    request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };

    request.open('GET', url, true);
    request.send();
  });

  promise.then(function (response) {
    success(response);
  }, function (error) {
    failure(error);
  });
}

exports.movieModule = movieApi;

},{"./../../.env":1}],3:[function(require,module,exports){
'use strict';

var movieApi = require('./../src/js/maps.js').movieModule;

$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    var userInput = $('#user-input').val();
    var movie = movieApi(userInput, success, failure);
  });
});
function success(response) {
  var body = JSON.parse(response);
  console.log(body.results[0]);
}

function failure() {
  console.log('Giving up');
}

},{"./../src/js/maps.js":2}]},{},[3]);
