var mongoose = require('mongoose');





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
	}

});


var customEventSchema = new mongoose.Schema({
	customEventTitle: {
		type : String,
		required: true
	},
	customEventStartDate: {
		type : Date,
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
		type : Number,
		required: true
	}
	
});


var eventSchema = new mongoose.Schema({
	eventTitle: {
		type : String,
		required: true
	},
	eventStartDate: {
		type : String,
		required: true
		//"default" : Date.now
	},
	eventDuration: {
		type : String,
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
		coordinates : {
			type: [Number],
			index : '2dsphere'// index so we can so search
		} // always tore coodinates long/lat order 
	},
	eventURL: {
		type : String
	},
	eventDescription: {
		type : String,
		required: true
	},
	eventImage : [String] 
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
mongoose.model('Organizer',organizerSchema);