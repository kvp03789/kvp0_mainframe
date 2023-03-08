import {makeEle, getCurrentTime, removeAllChildElements} from './utils.js'
import Night_ClearSky from '../img/night_clearsky_halfmoon.png';
import Night_Cloudy from '../img/night_cloudy_fullmoon.png';


export const getWeather = () => {

  const setCurrentTime = () => {
    currentTimePara.innerText = getCurrentTime(); 
  }
  setInterval(setCurrentTime, 1000);
  
  const weatherDiv = document.querySelector(".weather-div")
  removeAllChildElements(weatherDiv)
  const weatherDescriptionPara = makeEle('p', 'weather-text');
  const weatherTempPara = makeEle('p', 'weather-text');
  const currentTimePara = makeEle('p', 'weather-text');
  currentTimePara.innerText = getCurrentTime();
  const mainBody = document.querySelector(".main-container");
  const weatherImg = new Image();
  weatherImg.classList.add("weather-img")

  weatherDiv.append(weatherDescriptionPara, weatherImg, weatherTempPara, currentTimePara)
  


  const key = 'c96c7fb5e20d240b9c753b8516fdbd4d';

  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=35504,us&units=imperial&appid=${key}`, {mode: 'cors'})
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response)
      let currentWeatherText = response.weather[0].main;
      weatherDescriptionPara.innerText = currentWeatherText;
      weatherTempPara.innerText = response.main.temp + "°F";
      let weatherIconSrc = response.weather[0].icon
      //weatherImg.src = `http://openweathermap.org/img/wn/${weatherIconSrc}@2x.png`
      weatherImg.src = Night_ClearSky;
    })
    .catch(function(err){
      console.log(err)
    })

    return weatherDiv
}