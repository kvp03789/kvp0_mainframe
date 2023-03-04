export const makeEle = (elementType, className) => {
  const newEle = document.createElement(`${elementType}`);
  
  newEle.classList.add(`${className}`)

  return newEle;
}

export const removeAllChildElements = (ele) => {
  while(ele.firstChild){
    ele.removeChild(ele.lastChild);
  }
}

export const getCurrentTime = () => {
  let today = new Date();
  let hours = today.getHours()
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  if(hours === 0){
    hours = 12;
  }
  if(hours > 12){
    hours = hours % 12;
  }
  const time = `${hours}` + ":" + (`${minutes}` > 9 ? `${minutes}` : '0' + `${minutes}`) + ":" + (`${seconds}` > 9 ? `${seconds}` : '0' + `${seconds}`);
  return time;
}