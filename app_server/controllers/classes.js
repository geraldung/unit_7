/* GET 'home' page */
module.exports.classList = function(req, res) {
  res.render('class-list', {
    title: 'Course Organizer',
    pageHeader: {
      title: 'Course Organizer',
      strapline: 'Helping you get that 4.0!',
    },
    classes: [{
      name: 'CSCI 400: Programming Languages',
      address: 'Berthoud 243'
    }, {
      name: 'CSCI 440: Parallel Computing',
      address: 'Marquez 236'
    }, {
      name: 'CSCI 446: Web Applications',
      address: 'Online'
    }, {
      name: 'CSCI 473: Human Centered Robotics',
      address: 'Marquez 328'
    }, {
      name: 'CSCI 498: Robot Planning and Manipulation',
      address: 'CoorsTek 141'
    }]
  });
};

/* GET 'Class info' page */
module.exports.classInfo = function(req, res) {
  res.render('class-info', { title: 'Class Information' });
};

/* GET 'Add assignment' page */
module.exports.addAssignment = function(req, res) {
  res.render('add-assignment-form', { title: 'Add Assignment' });
};
