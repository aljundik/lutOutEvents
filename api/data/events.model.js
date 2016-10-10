var mongoose = require('mongoose');


var organizerSchema = new mongoose.Schema({
	orgaizerName: {
		type : String,
		required: true
	},
	orgaizerDescription: {
		type : String,
		required: true
	},
	orgaizerLogo : [String],

	orgaizerUserName: {
		type : String,
		required: true
	},
	orgaizerPassword: {
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
		type : Date,
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
		type : String,
		required: true
	},
	eventDescription: {
		type : Number,
		required: true
	},
	eventImage : [String] 
});


mongoose.model('Event',eventSchema);