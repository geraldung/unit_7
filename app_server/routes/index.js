var express = require('express');
var router = express.Router();
var ctrlClasses = require('../controllers/classes');

/* Classes pages */
router.get('/', ctrlClasses.classList);
router.get('/classes', ctrlClasses.classInfo);
router.get('/classes/add_assignment/new', ctrlClasses.addAssignment);

module.exports = router;
