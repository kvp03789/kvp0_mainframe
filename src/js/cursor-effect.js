import { makeEle } from './utils.js';
import Up from '../img/arrows/up.png'
import Down from '../img/arrows/down.png'
import Left from '../img/arrows/left.png'
import Right from '../img/arrows/right.png'
import DownLeft from '../img/arrows/down-left.png'
import DownRight from '../img/arrows/down-right.png'
import UpLeft from '../img/arrows/up-left.png'
import UpRight from '../img/arrows/up-right.png'

const docBody = document.querySelector(".main-container");
const cursorBuddy = new Image();
cursorBuddy.classList.add("cursor-buddy");
cursorBuddy.src = Down;
docBody.append(cursorBuddy);

export const makeMove = (e) => {
    let mouseX = e.pageX;
    let mouseY = e.pageY;
  
    cursorBuddy.style.position = 'absolute';
    let buddyPosX = cursorBuddy.offsetLeft;
    let buddyPosY = cursorBuddy.offsetTop;
  
  
    //find distance between buddy and cursor:
    let gapX = mouseX - buddyPosX;
    let gapY = mouseY - buddyPosY;

    if(gapX < 0 && (gapY < 50 && gapY > -50))
    {
      cursorBuddy.src = Left;
    }
    if(gapX > 0 && (gapY < 50 && gapY > -50))
    {
      cursorBuddy.src = Right;
    }
    if(gapX > 0 && gapY > 0)
    {
      cursorBuddy.src = DownRight;
    }
    if(gapX < 0 && gapY < 0)
    {
      cursorBuddy.src = UpLeft;
    }
    if(gapX > 0 && gapY < 0)
    {
      cursorBuddy.src = UpRight;
    }
    if(gapX < 0 && gapY > 0)
    {
      cursorBuddy.src = DownLeft;
    }
    if((gapX < 50 && gapX > -50) && gapY < 0)
    {
      cursorBuddy.src = Up;
    }
    if((gapX < 50 && gapX > -50) && gapY > 0)
    {
      cursorBuddy.src = Down;
    }

    updatePosition(e);
}

function updatePosition(e) {
  cursorBuddy.style.left = e.pageX - 37 + 'px';
  cursorBuddy.style.top = e.pageY - 37 + 'px';
}
  