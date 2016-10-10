var express = require('express');
var router = express.Router();

var ctrlOrganizer = require('../controllers/organizer.controllers.js');

router
	.route('/organizer') 	
	.get(ctrlOrganizer.organizerLogIn);

module.exports = router;