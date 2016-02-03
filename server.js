var express = require('express');//,
var xml = require('xml');
var app = express();
var suncalc = require('suncalc');

app.get('/xml', function(req, res) {
    var xmlresult = {
    APe: "35", Mandis: "32"
    };
    res.set('Content-Type', 'text/xml');
    res.send(xml(xmlresult));
});

app.get('*', function(req, res) {
    // get today's sunlight times for London
    var times = suncalc.getTimes(new Date(), 59.313, 18.065);
    res.json(times);
});

var port = 3000;
app.listen(port);
console.log('Listen on port: ' + port + '...');