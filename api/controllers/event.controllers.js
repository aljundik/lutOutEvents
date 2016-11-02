var mongoose = require ('mongoose');
var Organizer = mongoose.model('Organizer');


module.exports.eventGetAll = function(req,res){
	var organizerId = req.params.organizerId;// req parameters handles the url partamters
	console.log("you are in the event getAll controller");

	Organizer
	.findById(organizerId)
	.select('events')
	.exec (function(err,doc){
		var response = {
			status : 200,
			message : []};
			if (err) {
				console.log("Error finding organizer");
				response.status = 500;
				response.message = err;
			} else if(!doc) {
				console.log("organizer id not found in database", id);
				response.status = 404;
				response.message = {
					"message" : "organizer ID not found " + id
				};
			} else {
				response.message = doc.events ? doc.events : [];
			}
			res
			.status(response.status)
			.json(response.message);
		});
	console.log("you are at the end of event getAll controller");

};

var _splitArray = function (input) {
	var output;
	if (input && input.length >0){
		output = input.split(";");
	} else {
		output = [];
	}
	return output;
};

var _addEvent = function(req,res,organizer){

	// add review array to hotel 
	organizer.events.push({
		eventTitle : req.body.eventTitle,
		eventDuration : req.body.eventDuration,
		eventDescription : req.body.eventDescription,
		eventURL : req.body.eventURL,
		eventStartDate : req.body.eventStartDate,
		eventImage : _splitArray(req.body.eventImage),
		eventPrice : parseInt(req.body.eventPrice, 10),
		eventLocation : {
				address : req.body.address,
				coodrinates : [parseFloat(req.body.lng), parseFloat(req.body.lat)]
			}
	});
	organizer.save(function(err,eventUpdated){
		if(err){
			res
				.status(500)
				.json(err);
		} else {
			res
				.status(201)
				.json(eventUpdated.events[eventUpdated.events.length -1]);
		}
	});
}

module.exports.eventAddOne = function(req,res){
	var organizerId = req.params.organizerId;
	Organizer
	.findById(organizerId)
	.select('events')
	.exec (function(err,doc){
		var response = {
			status : 200,
			message : []};
			if (err) {
				console.log("Error finding Organizer");
				response.status = 500;
				response.message = err;
			} else if(!doc) {
				console.log("Organizer id not found in database", id);
				response.status = 404;
				response.message = {
					"message" : "Organizer ID not found " + id
				};
			} 
			if (doc){
				_addEvent(req,res,doc);
			} else {
				res
				.status(response.status)
				.json(response.message);
			}
		});

};

module.exports.eventGetOne = function(req,res){
	var organizerId = req.params.organizerId;
	var eventId = req.params.eventId;
	console.log('GET eventId ' + eventId + ' for organizerId ' + organizerId);

	Organizer
	.findById(organizerId)
	.select('events')
	.exec(function(err, organizer) {
		var response = {
			status : 200,
			message : {}
		};
		if (err) {
			console.log("Error finding organizer");
			response.status = 500;
			response.message = err;
		} else if(!organizer) {
			console.log("organizer id not found in database", id);
			response.status = 404;
			response.message = {
				"message" : "organizer ID not found " + id
			};
		} else {
        // Get the review
        response.message = organizer.events.id(eventId);
        // If the review doesn't exist Mongoose returns null
        if (!response.message) {
        	response.status = 404;
        	response.message = {
        		"message" : "Event ID not found " + eventId
        	};
        }
    }
    res
    .status(response.status)
    .json(response.message);
});


};

