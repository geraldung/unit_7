var mongoose = require( 'mongoose' );

var assignmentSchema = new mongoose.Schema({
  title: {type:String, required:true},
  due: {type:String, required:true},
  points: {type:Number, "default": 0, min: 0, max: 100}
});

var classInfoSchema = new mongoose.Schema({
  instructor: String,
  location: String,
  credits: Number,
  office: String,
  time: String
});

var locationSchema = new mongoose.Schema({
  name: {type:String, required:true},
  address: String,
  assignments: [assignmentSchema]
});

mongoose.model('Location', locationSchema);
