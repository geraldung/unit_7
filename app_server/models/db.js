var mongoose = require ('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/CourseOrganizer';
if (process.env.NODE_ENV === 'production') {
  dbURI = 'mongodb://csci446:connected@ds012538.mlab.com:12538/courseorganizer'
}
mongoose.connect(dbURI, { useMongoClient: true })

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.once('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

process.once('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function() {
    process.exit(0);
  });
});

require ('./locations');
