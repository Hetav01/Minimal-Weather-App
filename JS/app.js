var cityName = document.querySelector(".cityName");
var submit = document.querySelector(".submit");

var temperature = document.querySelector(".temperature");

function getData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=11b9cea129e1c344129854c681800e36`)
        .then(response =>
            response.json())
        .then(data => {
            console.log(data);
            var tempCity = data.main.temp - 273;
            temperature.innerHTML = `<div class="temperature">${parseFloat(tempCity.toPrecision(3)) + "°C"}</div>`;
            
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


