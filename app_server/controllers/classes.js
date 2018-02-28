/* GET 'home' page */
module.exports.classList = function(req, res) {
res.render('drugs-list', { title: 'Home' });
};

/* GET 'Location info' page */
module.exports.classInfo = function(req, res) {
res.render('index', { title: 'Class Information' });
};

/* GET 'Add review' page */
module.exports.addMaterial = function(req, res) {
res.render('index', { title: 'Add Class Material' });
};
