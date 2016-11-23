var mongoose = require ('mongoose');
var Student = mongoose.model('Student');

module.exports.studentRegister = function(req,res){

	console.log("We are Inside studentRegister controller");

	Student
		.create({
			studentName: req.body.studentName,
			studentUserName: req.body.studentUserName,
			studentPassword: req.body.studentPassword,
			studentEmail: req.body.studentEmail,
			

		},function(err, student){

			if(err){
				console.log("Error Creating student");
				res
					.status(400)
					.json(err);
			} else {
				console.log("student Created", student);
				res
					.status(201)
					.json(student);
			}
		});
};


module.exports.studentGetAll = function(req,res){

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
		Student
		.find()
		.skip(offset)
		.limit(count)
		.exec(function(err,students){ 

			if(err) {
				console.log("Error finding students");
				res
				.status(500)
				.json(err);
			} else{
				console.log("found students", students.length);
				res
				.json(students);
			}
		});

};

module.exports.studentGetOne = function(req,res){

	var studentId = req.params.studentId;// req parameters handles the url partamters 

	Student
	.findById(studentId)
	.exec (function(err,doc){
		var response = {
			status : 200,
			message : doc
		};
		if(err) {
			console.log("Error finding student");
			response.status = 500;
			response.message = err;
		} else if (!doc){
			response.status = 404;
				response.message = {
					"message" : "Student ID not found"
				};
		}
		res
		.status(response.status)
		.json(response.message);
		
	});
	console.log("get studentId", studentId);
};

module.exports.studentEdit = function(req,res){

	var studentId = req.params.studentId;// req parameters handles the url partamters 

	Student
	.findById(studentId)
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
					"message" : "Student ID not found"
				};
		}
		if (response.status !==200){
			res
				.status(response.status)
				.json(response.message);
			} else {
				doc.studentName = req.body.studentName;
				doc.studentUserName = req.body.studentUserName;
				doc.studentPassword = req.body.studentPassword;
				doc.studentEmail = req.body.studentEmail;

				doc.save(function(err,studentUpdated){
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

module.exports.studentDelete = function (req,res){
	var studentId = req.params.studentId;// req parameters handles the url partamters

	Student
		.findByIdAndRemove(studentId)
		.exec(function(err,student){

			if (err) {
				res
					.status(404)
					.json(err);
			} else{
				console.log("student deleted , id: " , studentId);
				res
					.status(204)
					.json();
			}

		});
};