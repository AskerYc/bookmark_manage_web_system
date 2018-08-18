var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));

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
app.get('/jquery.js', function(req, res) {
	res.sendFile( __dirname + "/enviroment/" + "jquery.js");
})
app.get('/images/together_in_movie_hotel.jpg', function (req, res) {
	res.sendFile( __dirname + "/login/images/" + "together_in_movie_hotel.jpg");
})
app.get('/images/Leon.jpg', function (req, res) {
	res.sendFile( __dirname + "/login/images/" + "Leon.jpg");
})
app.post('/login_submit', function(req, res) {
	var exec = require('child_process').exec;
	var usrname = req.body.usrname;
	var passwd = req.body.passwd;
	exec('python ./scripts/op_mysql.py 2 "' + usrname + '" "' + passwd +'"', function(error,stdout,stderr){
		console.log(stdout);
		res.jsonp(stdout);
	})
})

//register
app.get('/register', function(req, res) {
	res.sendFile( __dirname + "/register/" + "register.htm");
})
app.get('/register.css',function(req, res){
	res.sendFile( __dirname + "/register/" + "register.css");
})
app.get('/register.js',function(req, res){
	res.sendFile( __dirname + "/register/" + "register.js");
})
app.post('/register_submit', function(req, res){
	var info = req.body.info;
	var exec = require('child_process').exec;
	console.log(info);
	exec('python ./scripts/op_mysql.py ' + "1" + ' "' + info[0] + '" "' +info[1] + '" "' +info[2] + '" "' +info[3] + '" "' +info[4] + '" "' +info[5] + '" "' +info[6] + '" "' + info[7] + '"', function(error, stdout, stderr){
		if(stderr.length > 1){
			console.info('stderr: ' + stderr);
			res.jsonp("failed,please check your information or contract yc");
		}else{
			res.jsonp("success");
		}
	});
})

//bookmark
app.post('/bookmark', function(req, res){
	res.sendFile( __dirname + "/bookmark/" + "bookmark.htm");
})
app.get('/bookmark.css',function(req, res){
	res.sendFile( __dirname + "/bookmark/" + "bookmark.css");
})
app.get('/bookmark.js',function(req, res){
	res.sendFile( __dirname + "/bookmark/" + "bookmark.js");
})
app.get('/menu.png',function(req, res){
	res.sendFile( __dirname + "/bookmark/images/" + "menu.png");
})
app.get('/folder.jpg', function(req, res){
	res.sendFile( __dirname + "/bookmark/images/" + "folder.jpg")
})
app.get('/folder_close.jpg', function(req, res){
	res.sendFile( __dirname + "/bookmark/images/" + "folder_close.jpg")
})
app.post('/getUrlList', function(req, res){
	var username = req.body.username;
	var exec = require('child_process').exec;
	exec('python ./scripts/op_mysql.py 4 ' + username, function(error, stdout, stderr,list){
		stdout = stdout.replace(/\[/g, "").replace(/\]/g, "").replace(/u\'/g,"").replace(/\'/g,"").replace(/\s/g,"").split(',');
		console.log(stdout);
		for (var i = 0; i < stdout.length; i++) {
			console.log(stdout[i]);
		}
		var data = {URL:stdout};
		res.jsonp(data);
	})
})

var server = app.listen(5200, function () {
	console.log("somebody is come in");
})