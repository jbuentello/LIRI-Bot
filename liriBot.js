require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var moment = require("moment");

var Spotify = require('node-spotify-api');

var fs = require("fs");

var query = process.argv[3]

// console.log(keys);

var choose = process.argv[2];

console.log(choose);
 

// var spotify = new Spotify(keys.spotify);
 
// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });