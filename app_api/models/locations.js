var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    title: {type: String, required: true},
    points: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    status: {type: String, "default": "Not Started"},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

var locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    credits: {
        type: Number,
        "default": 1,
        min: 1,
        max: 5
    },
    instructor: {type: String},
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);
