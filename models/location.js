var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Location = new Schema({
    carId: String,
    lat: Number,
    lng: Number,
    acc: Number
});

Location.plugin(passportLocalMongoose);

module.exports = mongoose.model('locations', Location);