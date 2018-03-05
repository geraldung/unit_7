/* GET 'home' page */
module.exports.classList = function(req, res) {
  res.render('class-list', {title: 'Course Organizer'});
};

/* GET 'Class info' page */
module.exports.classInfo = function(req, res) {
  res.render('class-info', { title: 'Class Information' });
};

/* GET 'Add assignment' page */
module.exports.addAssignment = function(req, res) {
  res.render('add-assignment-form', { title: 'Add Assignment' });
};
