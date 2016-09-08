var logic = require('./logic.js');

exports.handler = function(event, context, callback) {

    console.log('Running refactored sunrise-api...');

    var alltimes = logic.sunrise(event.lat, event.lon, new Date(event.date));

    console.log('...returns result of sunrise-api...');

    callback(null, alltimes);
};
