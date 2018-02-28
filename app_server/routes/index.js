var express = require('express');
var router = express.Router();
var ctrlClasses = require('../controllers/classes');
var ctrlOthers = require('../controllers/others');

/* Classes pages */
router.get('/', ctrlClasses.classList);
router.get('/class', ctrlClasses.classInfo);
router.get('/class/review/new', ctrlClasses.addMaterial);

/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;
