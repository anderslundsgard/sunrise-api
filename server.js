var logic = require('./logic.js');

var express = require('express');
var app = express();

// Sample call: http://localhost:3000/?lat=59.2&lon=17.4&date=2016-01-14
app.get('*', function(req, res) {

    var alltimes = logic.sunrise(req.query.lat, req.query.lon, new Date(req.query.date));

    res.json(alltimes);
});

var port = 3000;
app.listen(port);
console.log('Listen on port: ' + port + '...');

// Test calls
// http://localhost:3000/?lat=59.22&lon=17.44&date=2012-06-23
// Compare with api.met.no
// http://api.met.no/weatherapi/sunrise/1.1/?lat=59.22;lon=17.44;date=2012-06-23