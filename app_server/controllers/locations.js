/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Course Organizer - Helping you get that 4.0!',
        pageHeader: {
            title: 'Course Organizer',
            strapline: 'Helping you get that 4.0!'
        },
        locations: [{
            name: 'CSCI 400 Programming Languages',
            address: 'Berthoud 243',
        }, {
            name: 'CSCI 440 Parallel Programming',
            address: 'Marquez 226',
        }, {
            name: 'CSCI 446 Web Applications',
            address: 'Online',
        }, {
            name: 'CSCI 473 Human Centered Robotics',
            address: 'Marquez 326',
        }, {
            name: 'CSCI 498 Robot Planning and Manipulation',
            address: 'Coorstek 140',
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'CSCI 400 Programming Languages',
        pageHeader: {
            title: 'CSCI 400 Programming Languages'
        },
        location: {
            name: 'CSCI 400 Programming Languages',
            address: 'Berthoud 243',
            credits: 3,
            instructor: 'Jack Rosenthal',
            openingTimes: [{
                days: 'Tuesday and Thursday',
                opening: '9:30 am',
                closing: '10:45 am',
                closed: false
            }],
            reviews: [{
                title: 'LGA 01',
                status: 'SUBMITTED',
                points: 10,
                reviewText: 'January 16, 2018'
            }, {
                title: 'LGA 02',
                status: 'STARTED',
                points: 10,
                reviewText: 'January 18, 2018'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Add Assignment',
        pageHeader: {
            title: 'Add Assignment'
        }
    });
};
