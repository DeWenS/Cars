module.exports = function (io) {
  var mongoose = require('mongoose');
  var Location = require('../models/location');

  io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    send();
    function send() {
      Location.find({}, function(err, loc) {
        socket.emit('location', loc);
      })
    }

    setInterval(send, 2000);

//    socket.on('my other event', function (data) {
//      console.log(data);
//      socket.emit('news', data);
//    });


  });

}