var express = require('express');
var xml = require('xml');
var app = express();
var suncalc = require('suncalc');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sunrisedb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});

// Sample call: http://localhost:3000/?lat=59.2&lon=17.4&date=2016-01-14
app.get('*', function(req, res) {
    var lat = req.query.lat;
    var lon = req.query.lon;
    var date = new Date(req.query.date);
    var times = suncalc.getTimes(date, lat, lon);
    res.json(times);
});

var port = 3000;
app.listen(port);
console.log('Listen on port: ' + port + '...');