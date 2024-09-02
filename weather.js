const iptbox = document.querySelector(".ipt-box");
const searchbtn = document.querySelector("#searchbtn");
const weather_img =document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature") 
const desc = document.querySelector(".desc") 
const wind = document.querySelector('#wind')
const humidity = document.querySelector('#humidity')
const cont = document.querySelector(".cont");
const w_body = document.querySelector(".weather-body");

async function checkweather(city){
    const api_key = "7aea639134f74c5aec7d3e7a4a29d5b8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
    response.json());


    if(weather_data.cod === '404'){
        cont.style.backgroundImage = 'url("goku.png")';
        cont.style.backgroundSize = 'cover';

        w_body.style.opacity = "0";

        
        return;
    }

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    desc.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity} %`;
    wind.innerHTML = `${weather_data.wind.speed} Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "C:/Users/abhis/OneDrive/Desktop/Inventory/javascript/public/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "C:/Users/abhis/OneDrive/Desktop/Inventory/javascript/public/clear.png";
            break;
        case 'Rain':
            weather_img.src = "C:/Users/abhis/OneDrive/Desktop/Inventory/javascript/public/rain.png";
            break;

        case 'Mist':
            weather_img.src = "C:/Users/abhis/OneDrive/Desktop/Inventory/javascript/public/mist.png";
            break;

        case 'Snow':
            weather_img.src = "C:/Users/abhis/OneDrive/Desktop/Inventory/javascript/public/snow.png";
            break;
    }

}

searchbtn.addEventListener('click', ()=>{
    checkweather(iptbox.value);
})