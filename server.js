var express = require('express');//,
var xml = require('xml');
var app = express();

app.get('/xml', function(req, res) {
    var xmlresult = {
    APe: "35", Mandis: "32"
    };
    res.set('Content-Type', 'text/xml');
    res.send(xml(xmlresult));
});

app.get('*', function(req, res) {
    res.json({ape: 'APe', roo: 21})
});

var port = 3000;
app.listen(port);
console.log('Listen on port: ' + port + '...');