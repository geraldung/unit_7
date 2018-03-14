/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Course Organizer',
        content: 'Use this course organizer to help you stay on top of your assignments.'
    });
};
