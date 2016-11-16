var mongoose = require ('mongoose');
var Organizer = mongoose.model('Organizer');
var Student = mongoose.model('Student');


module.exports.userLogin = function(req, res) {
	console.log('Accessing log in controller', req.body);
	var userName = req.body.userName;
	var userPassword = req.body.userPassword;
	
	Student
	.findOne({studentUserName: userName, studentPassword: userPassword})
	.exec(function(err, user){
		var response = {
			status : 200,
			message : user
		};
		if (err) {
			console.log("Login error");
			response.status = 500;
			response.message = err;
		} else {
			if (!user) {
				console.log('Hello User1: ', user);
				Organizer.findOne({organizerUserName: userName, organizerPassword: userPassword})
				.exec(function(err, user) {
					console.log('Hello User2: ', user);
					response = {
						status : 200,
						message : user
					};
					if (err) {
						console.log("Error login in");
						response.status = 500;
						response.message = err;
					}
					else {
						if (!user) {
							response.status = 401;
							response.message = {
								"message": "Username and password do not match."
							}
						}
					}
					res
					.status(response.status)
					.json(response.message);
				})
			} else {
				res
				.status(response.status)
				.json(response.message);
			}
		}
	});
	
}
