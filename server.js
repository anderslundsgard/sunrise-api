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

app.get('/xml', function(req, res) {
    var xmlresult = {
    APe: "35", Mandis: "32"
    };
    res.set('Content-Type', 'text/xml');
    res.send(xml(xmlresult));
});

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