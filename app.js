	
	require('./api/data/db.js');
	var express = require('express'); // import express
	var app = express();// assigh express to the variable
	var path = require('path');// import path module (to deal with files)
	var bodyParser = require('body-parser');

	var routes = require('./api/routes')
	app.set(process.env.PORT); // set up the port to be the one set by the environment

	app.use(function(req,res,next){ // again we are using anonymos function

		console.log(req.method,req.url);// console some infromation just to see the cabiblites of middleware

		next();// middleware handle functions needed to be run between request and respond
	});

	// REFACTOR THIS TO A SEPARATE FILE 
	// Application Static Resources
	app.use('/thirdparty', express.static(__dirname + '/node_modules'));
	app.use('/dist', express.static(__dirname + '/webapp/public'));

	app.use(bodyParser.urlencoded({extended : false }));// only string and json,, this is a middleware to deal with requests paramaeters
	//app.use(bodyParser.json());
	
// =======
// 	//app.use(bodyParser.urlencoded({extended : false }));// only string and json,, this is a middleware to deal with requests paramaeters
// 	app.use(bodyParser.json());

// >>>>>>> develop
	//Setting api routes
	app.use('/api',routes);
	
	//Setting application routes
	app.get('/', function(req, res) {
	    res.sendFile(path.join(__dirname + '/webapp/public/index.html'));
	});
	app.get('/events', function(req, res) {
	    res.sendFile(path.join(__dirname + '/webapp/public/index.html'));
	});
	app.get('/event*', function(req, res) {
	    res.sendFile(path.join(__dirname + '/webapp/public/index.html'));
	});
	app.get('/addOrganizer', function(req, res) {
	    res.sendFile(path.join(__dirname + '/webapp/public/index.html'));
	});


	var server = app.listen(process.env.PORT, process.env.IP, 511, function(){
		var port = server.address().port;// defin a variable port and assign the current addres to it
		console.log("the port is " + port);
	});// set the app to listen to the retrieved port and run the statment after conferming that it is runnin (call back function)
