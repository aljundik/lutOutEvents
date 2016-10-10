var mongoose = require ('mongoose');



module.exports.organizerLogIn = function(req,res){

	console.log("We are Inside organizerLogIn controller");

	res
		.status(201)
		.json({"Message":"so far we are good"});
		//final testing
};