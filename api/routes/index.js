var express = require('express');
var router = express.Router();

var ctrlOrganizer = require('../controllers/organizer.controllers.js');

router
	.route('/organizer') 	
	.post(ctrlOrganizer.organizerRegister)
	.get(ctrlOrganizer.organizerGetAll);

router
	.route('/organizer/:organizerId')
	.get(ctrlOrganizer.organizerGetOne)
	.put(ctrlOrganizer.organizerEdit)
	.delete(ctrlOrganizer.organizerDelete);

module.exports = router;