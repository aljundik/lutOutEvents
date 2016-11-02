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