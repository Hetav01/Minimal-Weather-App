var cityName = document.querySelector(".cityName");
var submit = document.querySelector(".submit");

var temperature = document.querySelector(".temperature");
var fahrenheit = document.querySelector(".inFahrenheit");
var names = document.querySelector(".name");
var sunrise = document.querySelector(".sunrise");
var sunset = document.querySelector(".sunset");
var speed = document.querySelector(".speed");
var degrees = document.querySelector(".degrees");

function getData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=11b9cea129e1c344129854c681800e36`)
        .then(response =>
            response.json())
        .then(data => {
            console.log(data);
            var tempCity = data.main.temp - 273;
            temperature.innerHTML = `<div class="temperature">${parseFloat(tempCity.toPrecision(3)) + "°C"}</div>`;
            var fahrenheitTemp = parseFloat(tempCity.toPrecision(3))*(9/5) + 32;
            fahrenheit.innerHTML = `<div class="inFahrenheit">(${parseFloat(fahrenheitTemp.toPrecision(4))}°F)</div>`;
           
            var nameOfCity = data.name;
            var country = data.sys.country;
            names.innerHTML = `<div class="name">${nameOfCity}, ${country}</div>`;
            
            var windSpeed = data.wind.speed;
            speed.innerHTML =  `<div class="speed"><span class="span">Wind Speed:</span> ${windSpeed}m/s</div>`;
            var deg = data.wind.deg;
            degrees.innerHTML = `<div class="degrees"><span class="span">Degrees:</span> ${deg}deg</div>`;

            function unixToTimeStamp(number) {
                // convert to milliseconds and  
                // then create a new Date object 
                dateObj = new Date(number * 1000);
                //utcString = dateObj.toUTCString();

                var time = dateObj.toTimeString();
                var finalTime = time.slice(0, 5);
                return finalTime;
            }

            var sunriseTime = data.sys.sunrise;
            var sunsetTime = data.sys.sunset;
            sunrise.innerHTML = `<div class="sunrise"><span class="span">Sunrise:</span> ${unixToTimeStamp(sunriseTime)}</div>`;
            sunset.innerHTML = `<div class="sunset"><span class="span">Sunset:</span> ${unixToTimeStamp(sunsetTime)}</div>`;

            console.log(unixToTimeStamp(sunriseTime));
            console.log(unixToTimeStamp(sunsetTime));
    })
        .catch(error => alert("wrong city name!"));
}



submit.addEventListener("click", () => {
    getData();
});

cityName.addEventListener("keydown", (event) => {
    if (event.keyCode === 13){
        event.preventDefault();
        getData();
    }
}); 


