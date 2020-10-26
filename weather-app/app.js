const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address) {
    console.log('Please provide an address.')
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            //what return does, is if the function returns, the next part of the funtion does not run
            return console.log(error);
        } console.log("Data: ", {latitude, longitude, location})

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log('The temparture for ' + location + ' is: ' + forecastData.temperature + 'ºC.')
        })
    })
}



