var express = require('express');
var router = express.Router();

var ctrlOrganizer = require('../controllers/organizer.controllers.js');
var ctrlEvent = require('../controllers/event.controllers.js');
var ctrlStudent = require('../controllers/student.controllers.js');
var ctrlStudent = require('../controllers/student.controllers.js');
var ctrlLogin = require('../controllers/login.controllers.js');
var ctrlCustomEvent = require('../controllers/customEvent.controllers.js');

router
	.route('/organizer') 	
	.post(ctrlOrganizer.organizerRegister)
	.get(ctrlOrganizer.organizerGetAll);

router
	.route('/organizer/:organizerId')
	.get(ctrlOrganizer.organizerGetOne)
	.put(ctrlOrganizer.organizerEdit)
	.delete(ctrlOrganizer.organizerDelete);

// Organizer events routes
router
	.route('/organizer/:organizerId/event')
	.get(ctrlEvent.eventGetAll) 
	.post(ctrlEvent.eventAddOne);

router 
	.route('/organizer/:organizerId/recent')
	.get(ctrlEvent.sortByRecent);

router
	.route('/organizer/:organizerId/event/:eventId')
	.get(ctrlEvent.eventGetOne)
	.put(ctrlEvent.eventUpdateOne)
	.delete(ctrlEvent.eventDeleteOne);

router
	.route('/events')
	.get(ctrlEvent.listAllEvents);


// Student Routes 

router
	.route('/student')
	.post(ctrlStudent.studentRegister)
	.get(ctrlStudent.studentGetAll);

router
	.route('/student/:studentId')
	.get(ctrlStudent.studentGetOne)
	.put(ctrlStudent.studentEdit)
	.delete(ctrlStudent.studentDelete);
// Student Custom Event
router
	.route('/student/:studentId/customEvent')
	.post(ctrlCustomEvent.customEventAddOne)
	.get(ctrlCustomEvent.customEventGetAll);

router
	.route('/student/:studentId/customEvent/:customEventId')
	.get(ctrlCustomEvent.customEventGetOne)
	.put(ctrlCustomEvent.customEventUpdateOne)
	.delete(ctrlCustomEvent.customEventDeleteOne);


// Login Events
router
	.route('/login')
	.post(ctrlLogin.userLogin);


module.exports = router;