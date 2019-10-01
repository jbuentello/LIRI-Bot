require("dotenv").config();

var keys = require("keys.js");

var axios = require("axios");

var moment = require("moment");

var Spotify = require('node-spotify-api');

var fs = require("fs");


 

var spotify = new Spotify(keys.spotify);
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });