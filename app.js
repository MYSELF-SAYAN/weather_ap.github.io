const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2659ebf51fmshf53e38f969bbf87p1689e2jsna1f7c22a194e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    document.getElementById("cityName").innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
           temp0.innerHTML=response.temp + '&#8451;'
           temp1.innerHTML=response.humidity + '%'
           temp2.innerHTML=response.wind_speed + ' km/h'
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));

    }
    getWeather("Delhi")
    submit.addEventListener("click", myFunction);

function myFunction(e){
    getWeather(city.value)
    e.preventDefault()
}
