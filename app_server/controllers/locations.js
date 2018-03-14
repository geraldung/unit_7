/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('class-list', {
        title: 'Course Organizer',
        pageHeader: {
            title: 'Course Organizer',
            strapline: 'Helping you get that 4.0'
        },
        locations: [{
            name: 'CSCI 400: Programming Languages',
            address: 'Berthoud 243',
        }, {
            name: 'CSCI 440: Parallel Computing',
            address: 'Marquez 224',
        }, {
            name: 'CSCI 446: Web Programming',
            address: 'Online',
        }, {
            name: 'CSCI 473: Human Centered Robotics',
            address: 'Marquez 326',
        }, {
            name: 'CSCI 498: Robot Planning and Maniuplation',
            address: 'CoorsTek 140',
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('class-info', {
        title: 'CSCI 400: Programming Languages',
        pageHeader: {
            title: 'CSCI 400: Programming Languages'
        },
        location: {
            name: 'CSCI 400: Programming Languages',
            instructor: 'Instructor: Jack Rosenthal',
            address: 'Location: Berthoud 243',
            credits: 'Credits: 3.0',
            office: 'Office Hours: Wednesday & Friday',
            time: '2:30pm - 4:00pm'
        },
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('add-assignment', {
        title: 'Add Assignment',
        pageHeader: {
            title: 'Add Assignment'
        }
    });
};
