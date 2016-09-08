var logic = require('./logic.js');

exports.sunrise = function(lat, lon, date){

    var suncalc = require('suncalc');

    //var lat = req.query.lat;
    //var lon = req.query.lon;
    //var date = new Date(req.query.date);
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

    return alltimes;
};