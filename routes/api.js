var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Location = require('../models/location');
//var io = require('socket.io-emitter')();

router.post('/location', function(req, res){
  var lat = parseFloat(req.body.lat);
  var lng = parseFloat(req.body.lng);
  var acc = parseInt(req.body.acc);
  var id = req.body.id;

  var location = new Location({
    lat: lat,
    lng: lng,
    acc: acc,
    carId: id
  });
  var upsertData = location.toObject();
  delete upsertData._id;
  Location.update({carId: location.carId}, upsertData, {upsert: true}, function(err){console.log('upserted');});


//  location.save(function(err){
//    console.log('saved');
//    io.emit('my other event', location);
//  });


  res.send('ok');
});

module.exports = router;