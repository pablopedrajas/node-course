const request = require('request');
const geocode = require('./geocode');

//weather stack
//Temperature, weather description, prediction

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=79d3e13cd80c31769ff658f9e93e8f76&query=' + latitude + ',' + longitude + '&units=m';

    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services.', undefined)
        } else if(body.error) {
            callback('Unable to find location. Try another one.', undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature
            })
        }    
    });
}


module.exports = forecast;