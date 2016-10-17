var mongoose = require ('mongoose');
var Organizer = mongoose.model('Organizer');

var _splitArray = function (input) {
	var output;
	if (input && input.length >0){
		output = input.split(";");
	} else {
		output = [];
	}
	return output;
};

module.exports.organizerRegister = function(req,res){

	console.log("We are Inside organizerRegister controller");

	Organizer
		.create({
			organizerName: req.body.organizerName,
			organizerUserName: req.body.organizerUserName,
			organizerPassword: req.body.organizerPassword,
			organizerEmail: req.body.organizerEmail,
			organizerDescription: req.body.organizerDescription,			 
			organizerLogo: req.body.organizerLogo

		},function(err, organizer){

			if(err){
				console.log("Error Creating organizer");
				res
					.status(400)
					.json(err);
			} else {
				console.log("organizer Created", organizer);
				res
					.status(201)
					.json(organizer);
			}
		});
};

module.exports.organizerGetAll = function(req,res){

	var offset = 0;
	var count =5;
	var maxCount= 10;

	if (req.query && req.query.offset){// check if query(URL) exist, and then check if it does hold the value offset
		offset= parseInt (req.query.offset,10);//since the request url is string, we need to change it to number by using parse int and 10 is to represent the numerical system used, in this case it is a decimal value
	}
	if (req.query && req.query.count){// check if query(URL) exist, and then check if it does hold the value count
		count= parseInt (req.query.count,10);//since the request url is string, we need to change it to number by using parse int
	}
		if (isNaN(offset) || isNaN(count)){// check if passed parameters are numbers
			res
			.status(400)
			.json({
				"message" : "if supplied in query string count and offset be number"
			});
			return;
		}
		if (count > maxCount){
			res
			.status(400)
			.json({
				"message" : "Count limit of " + maxCount + " exceeded"
			});
			return;
		}
		Organizer
		.find()
		.skip(offset)
		.limit(count)
		.exec(function(err,organizers){ 

			if(err) {
				console.log("Error finding Organizers");
				res
				.status(500)
				.json(err);
			} else{
				console.log("found Organizers", organizers.length);
				res
				.json(organizers);
			}
		});

};

module.exports.organizerGetOne = function(req,res){

	var organizerId = req.params.organizerId;// req parameters handles the url partamters 

	Organizer
	.findById(organizerId)
	.exec (function(err,doc){
		var response = {
			status : 200,
			message : doc
		};
		if(err) {
			console.log("Error finding organizer");
			response.status = 500;
			response.message = err;
		} else if (!doc){
			response.status = 404;
				response.message = {
					"message" : "Organizer ID not found"
				};
		}
		res
		.status(response.status)
		.json(response.message);
		
	});
	console.log("get organizerId", organizerId);

};

module.exports.organizerEdit = function(req,res){

	var organizerId = req.params.organizerId;// req parameters handles the url partamters 

	Organizer
	.findById(organizerId)
	.exec (function(err,doc){
		var response = {
			status : 200,
			message : doc
		};
		if(err) {
			console.log("Error finding organize");
			response.status = 500;
			response.message = err;
		} else if (!doc){
			response.status = 404;
				response.message = {
					"message" : "Organizer ID not found"
				};
		}
		if (response.status !==200){
			res
				.status(response.status)
				.json(response.message);
			} else {
				doc.organizerName = req.body.organizerName;
				doc.organizerDescription = req.body.organizerDescription;
				doc.organizerLogo = _splitArray(req.body.organizerLogo);
				doc.organizerUserName = req.body.organizerUserName;
				doc.organizerPassword = req.body.organizerPassword;
				doc.organizerEmail = req.body.organizerEmail;

				doc.save(function(err,organizerUpdated){
					if (err) {
						res
							.status(500)
							.json(err);
					}else{
						res
							.status(204)
							.json();
					}
				});
			}


		});	

};

module.exports.organizerDelete = function (req,res){

	var organizerId = req.params.organizerId;// req parameters handles the url partamters

	Organizer
		.findByIdAndRemove(organizerId)
		.exec(function(err,organizer){

			if (err) {
				res
					.status(404)
					.json(err);
			} else{
				console.log("organizer deleted , id: " , organizerId);
				res
					.status(204)
					.json();
			}

		});




};