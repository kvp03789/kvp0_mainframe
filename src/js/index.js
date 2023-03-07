import Block_Logo from '../img/block_logo.png';
import "../css/main.css";
import {createRain, handleResize} from './rain.js'
import {getWeather} from './weather.js'
import { makeEle } from './utils';
import {makeMove} from './cursor-effect'

const divContainer = document.createElement("div");
const aboutContainer = makeEle("div", "section-container");
const aboutHeading = makeEle("h1", "section-header");
const aboutPara = makeEle("p", "section-para");
const mainBody = document.querySelector(".main-container");
const blockLogo = document.createElement("img");

blockLogo.src = Block_Logo;
blockLogo.classList.add("logo-image");
blockLogo.classList.add("crt");
blockLogo.classList.add("brightness");
divContainer.classList.add("logo-container")
aboutHeading.innerText = "about";
aboutPara.innerText = "Hi i'm kvp0! this is my little corner of the internet where i'm going to post all of my dev projects, art, music, and just anything i wanna share with people :3 please enjoy ur stay"

divContainer.append(blockLogo);
aboutContainer.append(aboutHeading, aboutPara)
mainBody.append(divContainer, aboutContainer);

//window.addEventListener('DOMContentLoaded', createRain);
getWeather();

document.addEventListener("click", (e) => {makeMove(e)});


