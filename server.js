var express = require('express');
var app = express();

app.get('/login', function (req, res) {
	res.sendFile( __dirname + "/login/" + "login.htm");
})
app.get('/login.css', function (req, res) {
	res.sendFile( __dirname + "/login/" + "login.css");
})
app.get('/login.js', function (req, res) {
	res.sendFile( __dirname + "/login/" + "login.js");
})
app.get('/images/together_in_movie_hotel.jpg', function (req, res) {
	res.sendFile( __dirname + "/login/images/" + "together_in_movie_hotel.jpg");
})
app.get('/images/Leon.jpg', function (req, res) {
	res.sendFile( __dirname + "/login/images/" + "Leon.jpg");
})

var server = app.listen(5200, function () {
	console.log("somebody is come in");
})