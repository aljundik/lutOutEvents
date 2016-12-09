var mongoose = require ('mongoose');
var Organizer = mongoose.model('Organizer');
var Event = mongoose.model('Event');


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
		eventDescription : req.body.eventDescription,
		eventURL : req.body.eventURL,
		eventStartDate : req.body.eventStartDate,
		eventEndDate : req.body.eventEndDate,
		eventImage : _splitArray(req.body.eventImage),
		eventPrice : parseInt(req.body.eventPrice, 10),
		eventLocation : {
				address : req.body.eventAddress,
				latitude : parseFloat(req.body.eventLatitude),
				longitude: parseFloat(req.body.eventLongitude)
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

module.exports.eventUpdateOne = function(req,res){

  var organizerId = req.params.organizerId;
  var eventId = req.params.eventId;
  console.log('PUT eventId ' + eventId + ' for organizerId ' + organizerId);

  Organizer
    .findById(organizerId)
    .select('events')
    .exec(function(err, organizer) {
      var thisEvent;
      var response = {
        status : 200,
        message : {}
      };
      if (err) {
        console.log("Error finding organizer");
        response.status = 500;
        response.message = err;
      } else if(!organizer) {
        console.log("Organizer id not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "Organizer ID not found " + id
        };
      } else {
        // Get the review
        thisEvent = organizer.events.id(eventId);
        // If the review doesn't exist Mongoose returns null
        if (!thisEvent) {
          response.status = 404;
          response.message = {
            "message" : "Event ID not found " + eventId
          };
        }
      }
      if (response.status !== 200) {
        res
          .status(response.status)
          .json(response.message);
      } else {
        thisEvent.eventTitle = req.body.eventTitle;
        thisEvent.eventPrice = parseInt(req.body.eventPrice, 10);
        thisEvent.eventDuration = req.body.eventDuration;
        thisEvent.eventDescription = req.body.eventDescription;
        thisEvent.eventURL = req.body.eventURL;
        thisEvent.eventStartDate = _splitArray(req.body.eventStartDate);
        thisEvent.eventImage = req.body.eventImage;
        thisEvent.eventLocation = {
  				address : req.body.eventAddress,
  				latitude : parseFloat(req.body.eventLatitude),
  				longitude: parseFloat(req.body.eventLongitude)
  			};


  //       eventTitle : req.body.eventTitle,
		// eventDuration : req.body.eventDuration,
		// eventDescription : req.body.eventDescription,
		// eventURL : req.body.eventURL,
		// eventStartDate : req.body.eventStartDate,
		// eventImage : _splitArray(req.body.eventImage),
		// eventPrice : parseInt(req.body.eventPrice, 10),

        organizer.save(function(err, organizerUpdated) {
          if (err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json();
          }
        });
      }
    });	

};

module.exports.eventDeleteOne = function(req,res){
  var organizerId = req.params.organizerId;
  var eventId = req.params.eventId;
  console.log('PUT eventId ' + eventId + ' for organizerId ' + organizerId);

  Organizer
    .findById(organizerId)
    .select('events')
    .exec(function(err, organizer) {
      var thisEvent;
      var response = {
        status : 200,
        message : {}
      };
      if (err) {
        console.log("Error finding organizer");
        response.status = 500;
        response.message = err;
      } else if(!organizer) {
        console.log("Organizer id not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "Organizer ID not found " + id
        };
      } else {
        // Get the event
        thisEvent = organizer.events.id(eventId);
        // If the event doesn't exist Mongoose returns null
        if (!thisEvent) {
          response.status = 404;
          response.message = {
            "message" : "Event ID not found " + eventId
          };
        }
      }
      if (response.status !== 200) {
        res
          .status(response.status)
          .json(response.message);
      } else {
        organizer.events.id(eventId).remove();
        organizer.save(function(err, organizerUpdated) {
          if (err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json();
          }
        });
      }
    });
};

module.exports.sortByRecent = function(req,res){
  var organizerId = req.params.organizerId;

  console.log("you are in the event sortByRecent controller");

  Organizer
 .update(
   { _id: organizerId },
   {
     $push: {
       events: {
         $each: [],
         $sort: { eventCreatedOn: -1 }
       }
     }
   }
)
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
        response.message = doc ? doc : [];
        //response.message.sort({"events._id" : -1});
        console.log("you are at the end of sortByRecent controller");
      }
      res
      .status(response.status)
      //.json(response.message);
    });
  Organizer
  .findById(organizerId)
  .select('events')
 // .sort({"events._id" : -1})
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
        response.message = doc ? doc : [];
        //response.message.sort({"events._id" : -1});
        console.log("you are at the end of sortByRecent controller");
      }
      res
      .status(response.status)
      .json(response.message);
    });
  console.log("you are at the end of sortByRecent controller");
};

module.exports.listAllEvents = function(req,res){

  Organizer
  .find({},{"events":true,_id:false})
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
        response.message = doc ? doc : [];
        //response.message.sort({"events._id" : -1});
        console.log("you are at the end of sortByRecent controller");
      }
      res
      .status(response.status)
      .json(response.message);
    });
};


// var _addEvent = function(req,res,organizer){

//   // add review array to hotel 
//   organizer.events.push({
//     eventTitle : req.body.eventTitle,
//     eventDescription : req.body.eventDescription,
//     eventURL : req.body.eventURL,
//     eventStartDate : req.body.eventStartDate,
//     eventEndDate : req.body.eventEndDate,
//     eventImage : _splitArray(req.body.eventImage),
//     eventPrice : parseInt(req.body.eventPrice, 10),
//     eventLocation : {
//         address : req.body.eventAddress,
//         latitude : parseFloat(req.body.eventLatitude),
//         longitude: parseFloat(req.body.eventLongitude)
//       }
//   });
//   organizer.save(function(err,eventUpdated){
//     if(err){
//       res
//         .status(500)
//         .json(err);
//     } else {
//       res
//         .status(201)
//         .json(eventUpdated.events[eventUpdated.events.length -1]);
//     }
//   });
// }

module.exports.addEvent = function(req,res){

console.log("We are Inside addEvent controller");

  Event
    .create({
        eventTitle : req.body.eventTitle,
        eventDescription : req.body.eventDescription,
        eventURL : req.body.eventURL,
        eventStartDate : req.body.eventStartDate,
        eventEndDate : req.body.eventEndDate,
        organizer: req.body.organizerId,
        eventImage : _splitArray(req.body.eventImage),
        eventPrice : parseInt(req.body.eventPrice, 10),
        eventLocation : {
        address : req.body.eventAddress,
        latitude : parseFloat(req.body.eventLatitude),
        longitude: parseFloat(req.body.eventLongitude),
       // organizer: req.body.organizerId
      }
    },function(err, event){

      if(err){
        console.log("Error Creating event");
        res
          .status(400)
          .json(err);
      } else {
        console.log("event Created", event);
        res
          .status(201)
          .json(event);
      }
    });


};

module.exports.getEvent = function(req,res){
   var eventId = req.params.eventId;
  console.log("you are in the event getEvent controller");

  Event
  .findById(eventId)
  .exec (function(err,doc){
    var response = {
      status : 200,
      message : doc
    };
    if(err) {
      console.log("Error finding eventId");
      response.status = 500;
      response.message = err;
    } else if (!doc){
      response.status = 404;
        response.message = {
          "message" : "eventId ID not found"
        };
    }
    res
    .status(response.status)
    .json(response.message);
    
  });
  console.log("get Event", eventId);

};

module.exports.getAllEvents = function(req,res){

  Event
    .find()
    .sort([['eventStartDate', 1]])
    .exec(function(err,events){ 

      if(err) {
        console.log("Error finding events");
        res
        .status(500)
        .json(err);
      } else{
        console.log("found events", events.length);
        res
        .json(events);
      }
    });
};

module.exports.editEvent = function(req,res){
  var eventId = req.params.eventId;// req parameters handles the url partamters 

  Event
  .findById(eventId)
  .exec (function(err,doc){
    var response = {
      status : 200,
      message : doc
    };
    if(err) {
      console.log("Error finding event");
      response.status = 500;
      response.message = err;
    } else if (!doc){
      response.status = 404;
        response.message = {
          "message" : "event ID not found"
        };
    }
    if (response.status !==200){
      res
        .status(response.status)
        .json(response.message);
      } else {
        doc.eventTitle = req.body.eventTitle;
        doc.eventDescription = req.body.eventDescription;
        doc.eventImage = req.body.eventImage;
        doc.eventDuration = req.body.eventDuration;
        doc.eventURL = req.body.eventURL;
        doc.eventStartDate = req.body.eventStartDate;
        doc.eventEndDate = req.body.eventEndDate;
        doc.eventLocation = {
         address : req.body.eventAddress,
         latitude : parseFloat(req.body.eventLatitude),
         longitude: parseFloat(req.body.eventLongitude)
       };
        doc.save(function(err,eventUpdated){
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
module.exports.deleteEvent = function(req,res){

  var eventId = req.params.eventId;// req parameters handles the url partamters

  Event
    .findByIdAndRemove(eventId)
    .exec(function(err,event){

      if (err) {
        res
          .status(404)
          .json(err);
      } else{
        console.log("event deleted , id: " , eventId);
        res
          .status(204)
          .json();
      }

    });

};

module.exports.subscribe = function(req,res){

  var eventId = req.params.eventId;// req parameters handles the url partamters 
  var studentId = req.body.studentId;
  
  console.log("you are in subscribe");
    
   Event
  .findOneAndUpdate( {_id: eventId}, {$push: {students: studentId}},{ 'new': true}
    ,function(err,doc){
      var response = {
        status : 200,
        message : doc
      };
      if(err) {
        console.log("Error finding event");
        response.status = 500;
        response.message = err;
      } else if (!doc){
        response.status = 404;
          response.message = {
            "message" : "event ID not found"
          };
      }
      if (response.status !==200){
        res
          .status(response.status)
          .json(response.message);
      }
      
      res.send('Done');


    });
   
};

module.exports.subscribeDelete = function(req,res){
  var eventId = req.params.eventId;// req parameters handles the url partamters 
  var studentId = req.body.studentId;
  
  console.log("you are in subscribe");
    
   Event
  .findOneAndUpdate( {_id: eventId}, {$pop: {students: studentId}},{ 'new': true}
    ,function(err,doc){
      var response = {
        status : 200,
        message : doc
      };
      if(err) {
        console.log("Error finding event");
        response.status = 500;
        response.message = err;
      } else if (!doc){
        response.status = 404;
          response.message = {
            "message" : "event ID not found"
          };
      }
      if (response.status !==200){
        res
          .status(response.status)
          .json(response.message);
      }
      
      res.send('Done');


    });

};

module.exports.getAllEventsByStudent = function(req,res){
var studentId = req.params.studentId;

 Event
 .find( { students:  studentId  } )
 .exec(function(err,events){ 

      if(err) {
        console.log("Error finding events", err);
        res
        .status(500)
        .json(err);
      } else{
        console.log("found events", events.length);
        res
        .json(events);
      }
    });


};

module.exports.getAllFutureEvents = function(req,res){

   Event
    .find({eventEndDate : {$gte: Date()}})
    .sort([['eventStartDate', 1]])
    .exec(function(err,events){ 

      if(err) {
        console.log("Error finding events");
        res
        .status(500)
        .json(err);
      } else{
        console.log("found events", Date());
        res
        .json(events);
      }
    });

};