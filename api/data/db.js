var mongoose = require('mongoose');
var dburl = process.env.MONGODB_URI || 'mongodb://localhost:27017/lut_out'; //setup the url to find the db usin the protocols,, somthins simillar to https

mongoose.connect(dburl);

mongoose.connection.on('connected',function(){

	console.log("Mongoose connected to"  + dburl);
});
mongoose.connection.on("disconnected",function(){

	console.log("Mongoose disconnected ");
});
mongoose.connection.on('error',function(err){

	console.log("Mongoose connection error: " + err);
});
//events in node process , what happen when ctr c pressed
process.on("SIGINT", function(){
	mongoose.connection.close(function(){
		console.log("Mongoose disconnected through app termination");
		process.exit(0);
	});
});
// event for heroku 
process.on("SIGTERM", function(){
	mongoose.connection.close(function(){
		console.log("Mongoose disconnected through app termination");
		process.exit(0);
	});
});
// event to handle restaring nodemon
process.once("SIGUSR2", function(){
	mongoose.connection.close(function(){
		console.log("Mongoose disconnected through app termination");
		process.kill(process.pid,'SIGUSR2');
	});
});

// this folder to manage mongoose connection, by handling the different
//kind of event that might occur to dbs connection


// bring in schemas and models

require('./events.model.js');// call the models into the db connection
