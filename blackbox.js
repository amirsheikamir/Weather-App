const apiKey = "b830a9049a7f7784ec947d6f3d2882b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


// image
const wheatherIcon = document.querySelector(".wheather-icon");

async function checkWeather(city){
 const responce = await fetch(apiUrl + city +  `&appid=${apiKey}`);
 

 if (responce.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
 }else {
 
    var data = await responce.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
   
   // update image 
   
   if (data.weather[0].main == "Clouds"){
       wheatherIcon.src = "images/clouds.png"
   }
   else if (data.weather[0].main == "Rain"){
       wheatherIcon.src = "images/rain.png"
   }
   else if (data.weather[0].main == "Drizzle"){
       wheatherIcon.src = "images/drizzle.png"
   }
   else if (data.weather[0].main == "Mist"){
       wheatherIcon.src = "images/mist.png"
   }
   else if (data.weather[0].main == "Snow"){
    wheatherIcon.src = "images/snow.png"
}
   
   //  change layout 
   document.querySelector(".weather").style.display="block";
   document.querySelector(".error").style.display = "none";
 }


}
searchBtn.addEventListener("click", ()=> {
        checkWeather(searchBox.value);
})

checkWeather()