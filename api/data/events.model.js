var mongoose = require('mongoose');



var customEventSchema = new mongoose.Schema({
	customEventTitle: {
		type : String,
		required: true
	},
	customEventStartDate: {
		type : String,
		//"default" : Date.now
	},
	customEventDuration: {
		type : String,
		required: true
	},
	customEventCreatedOn: {
		type : Date,
		"default" : Date.now
	},
	customEventDescription: {
		type : String,
		required: true
	}
	
});

var studentSchema = new mongoose.Schema({
	studentName: {
		type : String,
		required: true
	},
	studentUserName: {
		type : String,
		required: true
	},
	studentPassword: {
		type : String,
		required: true
	},
	studentEmail: {
		type : String,
		required: true
	},
	customEvent :[customEventSchema]

});

var eventSchema = new mongoose.Schema({
	eventTitle: {
		type : String,
		required: true
	},
	eventStartDate: {
		type : Date,
		required: true
		//"default" : Date.now
	},
	eventEndDate: {
		type : Date,
		required: true
	},
	eventCreatedOn: {
		type : Date,
		"default" : Date.now
	},
	eventPrice: {
		type : Number,
		required: true,
		"default" : 0
	},
	eventLocation : {
		address: String,
		latitude: Number,
		longitude: Number
	},
	eventURL: {
		type : String
	},
	eventDescription: {
		type : String,
		required: true
	},
	eventImage : [String],
    organizer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Organizer'
        },
    students: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }]
    });
var organizerSchema = new mongoose.Schema({
	organizerName: {
		type : String,
		required: true
	},
	organizerDescription: {
		type : String,
		required: true
	},
	organizerLogo : [String],

	organizerUserName: {
		type : String,
		required: true
	},
	organizerPassword: {
		type : String,
		required: true
	},
	organizerEmail: {
		type : String,
		required: true
	},
	events :[eventSchema]  
	
});




//mongoose.model('Event',eventSchema);
var Organizer = mongoose.model('Organizer',organizerSchema);
var Student = mongoose.model('Student',studentSchema);
mongoose.model('Event',eventSchema);