
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
  spotify.search({ type:'track', query: songText,limit:1}, function(error,data) {
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
  //Create Movie Function with Default Movie
  function movieThis(movieName) {
    if (!movieName) {
      movieName = "Mr.Nobody";
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    //Axios Request
    axios.get(queryUrl).then(
      function(response) {
        if (!movieName) {
          movieName="Mr.Nobody";}
          console.log("\n_Movie Info_" + "\nTitle: " + response.data.Title + "\nRelease Year: " + response.data.Year + "\nRating: " + response.data.Rated + "\nRelease Country: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors + "\n" + "\n GREAT MOVIE!");
        }
    );
  }

  function concertThis(artist) {
    var bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(bandsURL).then (
      function (response) {
        console.log("Artist: " + artist + "\nVenue: " + response.data[0].venue.name + "\nLocation: " + response.data[0].venue.country + "\nDate: " + response.data[0].datatime + "\nGET OUR ROCK ON!");
        console.log("_Upcoming Events_");
      });
    }