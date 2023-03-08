import { makeEle } from './utils';
import {getWeather} from './weather.js'
import Block_Logo from '../img/block_logo.png';
import Avatar from '../img/kvp0_avatar.gif'

export const addDomStuff = () => {
  const divContainer = document.createElement("div");
const aboutContainer = makeEle("div", "section-container");
const aboutHeading = makeEle("h1", "section-header");
const aboutPara = makeEle("p", "section-para");
const mainBody = document.querySelector(".main-container");
const blockLogo = document.createElement("img");
const AvatarImg = new Image();
const weatherWidget = getWeather();


blockLogo.src = Block_Logo;
blockLogo.classList.add("logo-image");
blockLogo.classList.add("crt");
blockLogo.classList.add("brightness");
divContainer.classList.add("logo-container")
aboutHeading.innerText = "about";
AvatarImg.src = Avatar
aboutPara.innerText = "Hi i'm kvp0! this is my little corner of the internet where i'm going to post all of my dev projects, art, music, and just anything i wanna share with people :3 enjoy ur stay ^-^"

divContainer.append(blockLogo);
aboutContainer.append(aboutHeading, aboutPara, AvatarImg)
mainBody.append(divContainer, aboutContainer, weatherWidget);
}