var mongoose = require ('mongoose');
var Student = mongoose.model('Student');

var _addEvent = function(req,res,student){

	// add review array to hotel 
	student.customEvent.push({
		customEventTitle : req.body.customEventTitle,
		customEventStartDate : req.body.customEventStartDate,
		customEventDuration : req.body.customEventDuration,
		customEventDescription : req.body.customEventDescription
	});
	student.save(function(err,customEventUpdated){
		if(err){
			res
				.status(500)
				.json(err);
		} else {
			res
				.status(201)
				.json(customEventUpdated.customEvent[customEventUpdated.customEvent.length -1]);
		}
	});
}

module.exports.customEventAddOne = function(req,res){

	var studentId = req.params.studentId;
	Student
	.findById(studentId)
	.select('customEvent')
	.exec (function(err,doc){
		var response = {
			status : 200,
			message : []};
			if (err) {
				console.log("Error finding Student");
				response.status = 500;
				response.message = err;
			} else if(!doc) {
				console.log("Student id not found in database", id);
				response.status = 404;
				response.message = {
					"message" : "Student ID not found " + id
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

module.exports.customEventGetAll = function(req,res){
	var studentId = req.params.studentId;// req parameters handles the url partamters
	console.log("you are in the event getAll controller");

	Student
	.findById(studentId)
	.select('customEvent')
	.exec (function(err,doc){
		var response = {
			status : 200,
			message : []};
			if (err) {
				console.log("Error finding Student");
				response.status = 500;
				response.message = err;
			} else if(!doc) {
				console.log("Student id not found in database", id);
				response.status = 404;
				response.message = {
					"message" : "Student ID not found " + id
				};
			} else {
				response.message = doc.customEvent ? doc.customEvent : [];
			}
			res
			.status(response.status)
			.json(response.message);
		});
	console.log("you are at the end of Custom event getAll controller");
};

module.exports.customEventGetOne = function(req,res){

	var studentId = req.params.studentId;
	var customEventId = req.params.customEventId;
	console.log('GET customEventId ' + customEventId + ' for studentId ' + studentId);

	Student
	.findById(studentId)
	.select('customEvent')
	.exec(function(err, student) {
		var response = {
			status : 200,
			message : {}
		};
		if (err) {
			console.log("Error finding student");
			response.status = 500;
			response.message = err;
		} else if(!student) {
			console.log("student id not found in database", id);
			response.status = 404;
			response.message = {
				"message" : "student ID not found " + id
			};
		} else {
        // Get the review
        response.message = student.customEvent.id(customEventId);
        // If the review doesn't exist Mongoose returns null
        if (!response.message) {
        	response.status = 404;
        	response.message = {
        		"message" : "Event ID not found " + customEventId
        	};
        }
    }
    res
    .status(response.status)
    .json(response.message);
});
};
module.exports.customEventUpdateOne = function(req,res){
  var studentId = req.params.studentId;
  var customEventId = req.params.customEventId;

  console.log('PUT customEventId ' + customEventId + ' for studentId ' + studentId);

  Student
    .findById(studentId)
    .select('customEvent')
    .exec(function(err, student) {
      var thisEvent;
      var response = {
        status : 200,
        message : {}
      };
      if (err) {
        console.log("Error finding student");
        response.status = 500;
        response.message = err;
      } else if(!student) {
        console.log("student id not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "student ID not found " + id
        };
      } else {
        // Get the custom event
        thisEvent = student.customEvent.id(customEventId);
        // If the custom event doesn't exist Mongoose returns null
        if (!thisEvent) {
          response.status = 404;
          response.message = {
            "message" : "Event ID not found " + customEventId
          };
        }
      }
      if (response.status !== 200) {
        res
          .status(response.status)
          .json(response.message);
      } else {
        thisEvent.customEventTitle = req.body.customEventTitle;
        thisEvent.customEventDuration = req.body.customEventDuration;
        thisEvent.customEventDescription = req.body.customEventDescription;
        thisEvent.customEventStartDate = req.body.customEventStartDate;
        student.save(function(err, studentUpdated) {
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

module.exports.customEventDeleteOne = function (req,res){
  var studentId = req.params.studentId;
  var customEventId = req.params.customEventId;
  console.log('PUT customEventId ' + customEventId + ' for studentId ' + studentId);

  Student
    .findById(studentId)
    .select('customEvent')
    .exec(function(err, student) {
      var thisEvent;
      var response = {
        status : 200,
        message : {}
      };
      if (err) {
        console.log("Error finding student");
        response.status = 500;
        response.message = err;
      } else if(!student) {
        console.log("student id not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "student ID not found " + id
        };
      } else {
        // Get the review
        thisEvent = student.customEvent.id(customEventId);
        // If the review doesn't exist Mongoose returns null
        if (!thisEvent) {
          response.status = 404;
          response.message = {
            "message" : "Event ID not found " + customEventId
          };
        }
      }
      if (response.status !== 200) {
        res
          .status(response.status)
          .json(response.message);
      } else {
        student.customEvent.id(customEventId).remove();
        student.save(function(err, studentUpdated) {
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