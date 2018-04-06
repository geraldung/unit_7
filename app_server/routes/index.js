var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/assignment/new', ctrlLocations.addReview);

module.exports = router;
