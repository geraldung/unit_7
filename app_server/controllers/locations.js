var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptionsserver = "https://nameless-sierra-39744.herokuapp.com";
}

/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Course Organizer',
        pageHeader: {
            title: 'Course Organizer',
            strapline: 'Helping you get that 4.0!'
        },
        locations: [{
            name: 'CSCI 400 Programming Languages',
            address: 'Berthoud 243',
            credits: 3,
            instructor: 'Jack Rosenthal'
        }, {
            name: 'CSCI 440 Parallel Computing',
            address: 'Marquez 226',
            credits: 3,
            instructor: 'Bo Wo'
        }, {
            name: 'CSCI 446 Web Applications',
            address: 'Online',
            credits: 3,
            instructor: 'Cyndi Rader'
        }, {
            name: 'CSCI 473 Human Centered Robotics',
            address: 'Marquez 328',
            credits: 3,
            instructor: 'Hao Zhang'
        }, {
            name: 'CSCI 498 Robot Planning and Manipulation',
            address: 'CoorsTek 140',
            credits: 3,
            instructor: 'Neil Dantam'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'CSCI 400',
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
                opening: '9:30am',
                closing: '10:45am',
                closed: false
            }],
            reviews: [{
                title: 'LGA 01',
                dueDate: '16 January 2018',
                status: 'Submitted',
                points: 10
            }, {
                title: 'LGA 02',
                dueDate: '18 January 2018',
                status: 'Started',
                points: 10
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
