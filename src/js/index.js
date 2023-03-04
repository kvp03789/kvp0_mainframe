import Logo from '../img/kvp0_logo.gif';
import Online_Logo from '../img/online.png';
import Block_Logo from '../img/block_logo.png';
import "../css/main.css";
import {createRain, handleResize} from './rain.js'
import {getWeather} from './weather.js'

const divContainer = document.createElement("div");
const mainBody = document.querySelector(".main-container");
const blockLogo = document.createElement("img");
blockLogo.src = Block_Logo;
blockLogo.classList.add("logo-image");
blockLogo.classList.add("crt");
blockLogo.classList.add("brightness");
divContainer.classList.add("logo-container")
divContainer.append(blockLogo);
mainBody.append(divContainer);

window.addEventListener('DOMContentLoaded', createRain);
getWeather();



