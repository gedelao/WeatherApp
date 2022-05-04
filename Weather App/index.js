var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('#cityoutput')
var temp = document.querySelector('.temp')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var windspeed = document.querySelector('#windspd')

      //kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.

    function convertion(val){
        return (val - 273).toFixed(2)
    }

    button.addEventListener('click', function(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=74980c9de013bc984bb0b296eee89920`)
        .then(res => res.json())
        .then(data => {
            var nameval = data.name
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var windspd = data['wind']['speed']
      //grabbing specific api

            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            windspeed.innerHTML = `Wind Speed: <span>${windspd} km/h<span>`
            })

      //text output for my api

        .catch(err => alert('You entered Wrong city name'))
        })
        // The .catch err will alert the user if an incorrect city was entered

