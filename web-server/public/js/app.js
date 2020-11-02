console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1')
const messageOTwo = document.querySelector('#message-2')

messageOne.textContent = ""
messageOTwo.textContent = ""

weatherForm.addEventListener('submit', (e) => {
    //prevents browser refresh
    e.preventDefault()

    const location = search.value;

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
            } else{
                messageOne.textContent = 'Location: ' + data.location
                messageOTwo.textContent = 'Forecast: ' + data.forecast.temperature + 'ºC'
                console.log(data.forecast)
            }
            
        })
    })
})