
require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var moment = require("moment");

var Spotify = require("node-spotify-api");

var fs = require("fs");

var choose = process.argv[2];
var query = process.argv[3];

// console.log(choose);

var spotify = new Spotify(keys.spotify);

switch (choose) {
  case ("spotify-this-song"):
    if (query){
      spotifyThis(query)
    } else {
      spotifyThis("My Heart Will Go On");
    }
    spotifyThis(query);
    break;
  case "concert-this":
    concertThis(query);
    break;
  case "movie-this":
    movieThis(query);
    break;
  case "do-what-it-says":
    doThis(query);
    break;
  default:
    // console.log("Please type: node liriBot.js <function> <argument>")
}

function spotifyThis(songText){
  spotify.search({ type:'track', query: "Gangsta",limit:1}, function(error,data) {
    if (error) {
      console.log(error);
    }
    else {
      var musicInfo = data.tracks.items[0];
      var spotifyItems = {
        Artist: musicInfo.artists[0].name,
        Songs: musicInfo.name,
        Preview: musicInfo.preview_url,
        Album: musicInfo.album.name
      }
      console.log(spotifyItems);
      // console.log(songText);
      // for(var i = 0; i < data.tracks.items.length; i++){
      //   console.log('Artist: ' + musicInfo.artists[0].name);
      //   console.log('Songs: ' + musicInfo.name);
      //   console.log('Preview: ' + musicInfo.preview_url);
      //   console.log('Album: ' + musicInfo.album.name);
      // }
      // console.log(data.tracks.items);
    }
      // return console.log('error: ' + err);
    });
  // console.log("Run");  
  }
  