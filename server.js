var express = require('express');
var app = express();

//login
app.get('/login', function (req, res) {
	res.sendFile( __dirname + "/login/" + "login.htm");
})
app.get('/login.css', function (req, res) {
	res.sendFile( __dirname + "/login/" + "login.css");
})
app.get('/login.js', function (req, res) {
	res.sendFile( __dirname + "/login/" + "login.js");
})
app.get('/jquery.js', function(req, res){
	res.sendFile( __dirname + "/enviroment/" + "jquery.js");
})
app.get('/images/together_in_movie_hotel.jpg', function (req, res) {
	res.sendFile( __dirname + "/login/images/" + "together_in_movie_hotel.jpg");
})
app.get('/images/Leon.jpg', function (req, res) {
	res.sendFile( __dirname + "/login/images/" + "Leon.jpg");
})
app.get('/register.htm', function(req, res) {
	res.sendFile( __dirname + "/register/" + "register.htm");
})

//register
app.get('/register.css',function(req, res){
	res.sendFile( __dirname + "/register/" + "register.css");
})
app.get('/register.js',function(req, res){
	res.sendFile( __dirname + "/register/" + "register.js");
})
app.post('/register_submit', function(req, res){
	console.log(req.body);
})

var server = app.listen(5200, function () {
	console.log("somebody is come in");
})