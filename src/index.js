import testLog from './test.js';
import "./main.css";

const doc = document.querySelector(".main-container");
const button = document.createElement("button");
doc.append(button);
button.innerText = "Click Me"
button.addEventListener("click", () => testLog());