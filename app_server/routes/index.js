var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/class', ctrlLocations.locationInfo);
router.get('/class/add_assignment/new', ctrlLocations.addReview);

module.exports = router;
