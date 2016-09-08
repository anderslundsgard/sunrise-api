// Sample call: http://localhost:3000/?lat=59.2&lon=17.4&date=2016-01-14

exports.handler = function(event, context, callback) {

    console.log('Running sunrise-api...');

    var suncalc = require('suncalc');

    var lat = event.lat;
    var lon = event.lon;
    var date = new Date(event.date);
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

    console.log('...returns result of sunrise-api...');

    callback(null, alltimes);
};
// Test calls
// http://localhost:3000/?lat=59.22&lon=17.44&date=2012-06-23
// Compare with api.met.no
// http://api.met.no/weatherapi/sunrise/1.1/?lat=59.22;lon=17.44;date=2012-06-23
