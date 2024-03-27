let search = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let main = document.querySelector(".weather");
let weatherIcon = document.querySelector(".weather-icon");

function convertion(val)
 {
	return (val - 273).toFixed();
}


const apiKey = "b5dc81e69472ea70908fd69d6b8f4f9c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

async function checkWeather(citys){
	const response = await fetch(apiUrl + citys + `&appid=${apiKey}`);
	let data = await response.json();

	console.log(data);

	city.innerHTML = data.name;
	temp.innerHTML = convertion(data.main.temp) + " °C";
	humidity.innerHTML = data.main.humidity + "%";
	wind.innerHTML = Math.round(data.wind.speed) + " km/h";

	if(data.weather[0].main == "Clouds"){
		weatherIcon.src = "img/clouds.png";
	}
	else if(data.weather[0].main == "Clear"){
		weatherIcon.src = "img/sun.png";
	} 
	else if(data.weather[0].main == "Drizzle"){
		weatherIcon.src = "img/drizzel.png";
	} 
	else if(data.weather[0].main == "Rain"){
		weatherIcon.src = "img/rain.png";
	} 
	else if(data.weather[0].main == "Snow"){
		weatherIcon.src = "img/snow.png";
	} 
	else if(data.weather[0].main == "Mist"){
		weatherIcon.src = "img/mist.png";
	} 

	main.style.display = "block"; 
}

searchbtn.addEventListener("click", ()=>{
	checkWeather(search.value);
})

