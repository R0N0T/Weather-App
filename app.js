const apikey = "8512a351a25c21f82f56bfae95a4a7fc";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl +city+ '&appid='+ apikey);
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)-273 + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src="images/mist.png";
    }
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
