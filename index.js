

const apikey='32156419f9bf4f6b61b0b510d105f16f';

const apiurl='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

const searchBox=document.querySelector('.search input')
const searchBtn=document.querySelector('.search button')
const weatherIcon=document.querySelector('.weather-icon');


async function checkWeather(city){
  

    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)

    if (response.status==404){
        document.querySelector('.error').style.display='block'
        document.querySelector('.weather').style.display='none'
    }
    else{
        var data = await response.json();

   

        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML= Math.round((data.main.temp-273.15).toFixed(2) )+'°C';
        document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
        document.querySelector('.wind').innerHTML=data.wind.speed+ ' km/h';
    
       if(data.weather[0].main == "Mist"){
        weatherIcon.src="mist.png"
    
       }
       if(data.weather[0].main == "Haze"){
        weatherIcon.src="haze.png"
    
       }
       if(data.weather[0].main == "Clear"){
        weatherIcon.src="clear.png"
    
       }
       if(data.weather[0].main == "Clouds"){
        weatherIcon.src="cloud.png"
    
       }
       if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="drizzle.png"
    
       }
       if(data.weather[0].main == "Rain"){
        weatherIcon.src="rain.png"
    
       }
    
       document.querySelector('.weather').style.display='block'
       document.querySelector('.error').style.display='none'
       
    
    
    
        
    }
    }
    

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})




