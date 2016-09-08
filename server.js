var express = require('express');
var app = express();
var suncalc = require('suncalc');
var mongoose = require('mongoose');

// Sample call: http://localhost:3000/?lat=59.2&lon=17.4&date=2016-01-14
app.get('*', function(req, res) {
    var lat = req.query.lat;
    var lon = req.query.lon;
    var date = new Date(req.query.date);
    var suntimes = suncalc.getTimes(date, lat, lon);
    var moontimes = suncalc.getMoonTimes(date, lat, lon);
    var moonillumination = suncalc.getMoonIllumination(date);

    // merge sun and moon results
    var alltimes = suntimes;

    alltimes["moonrise"] = moontimes["rise"];
    alltimes["moonset"] = moontimes["set"];

    alltimes["moonfraction"] = moonillumination["fraction"];
    alltimes["moonphase"] = moonillumination["phase"];
    alltimes["moonangle"] = moonillumination["angle"];

    res.json(alltimes);
});

var port = 3000;
app.listen(port);
console.log('Listen on port: ' + port + '...');

// Test calls
// http://localhost:3000/?lat=59.22&lon=17.44&date=2012-06-23
// Compare with api.met.no
// http://api.met.no/weatherapi/sunrise/1.1/?lat=59.22;lon=17.44;date=2012-06-23