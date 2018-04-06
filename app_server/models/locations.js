var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema ({
  title: {type: String, required: true},
  reviewText: {type: Date, required: true},
  points: {type: Number, required: true, min: 0, max: 100},
  status: {type: String, "default": "Not Started"}
})

var openingTimeSchema = new mongoose.Schema ({
  days: {type: String, required: true},
  opening: String,
  closing: String,
  closed: {type: Boolean, required: true}
});

var locationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String, required: false},
  credit: {type: Number, required: true},
  instructor: {type String, required: true}
  reviews: [reviewSchema]
 });

 mongoose.model("Locations", locationSchema);
