
export const createRain = () => {
  const logoImage = document.querySelector(".logo-image")
  const canvas = document.querySelector("#rain-canvas");
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let w = canvas.width;
  let h = canvas.height;

  let rect = logoImage.getBoundingClientRect();
  console.log(rect);
  let logoImageW = logoImage.naturalWidth;
  let logoImageH = logoImage.naturalHeight;  
  let logoImageX = rect.left -(logoImageW/2)
  let logoImageY = rect.top - (logoImageH/2)

  let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#b3f3f7');
  gradient.addColorStop(1, 'white');
  ctx.strokeStyle = gradient;

  ctx.linewidth = 1;
  ctx.lineCap = 'round';

  const initArray = [];
  let maxParticles = 750;
  for(let a = 0; a < maxParticles; a++){
    initArray.push({
      x: Math.random() * w,
      y: Math.random() * h,
      l: Math.random() * 5,
      xs: -1 + Math.random() * 4 + 2,
      ys: Math.random() * 10 + 20
    })
  }

  const particles = [];
  for(let b = 0; b < maxParticles; b++){
    particles[b] = initArray[b]
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for(let c = 0; c < particles.length; c++){
      let p = particles[c];
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
      ctx.stroke();
      ctx.clearRect(logoImageX, logoImageY, logoImageW, logoImageH)
    }
    move();
  }

  function move() {
    for(let b = 0; b < particles.length; b++){
      let p = particles[b];
      p.x += p.xs;
      p.y += p.ys;
      if(p.x > w || p.y > h){
        p.x = Math.random() * w;
        p.y = -20;
      }
    }
    drawSplash()
    
  }


  function drawSplash() {
    let max = logoImageX + logoImageW;
    let min = logoImageX; 
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(Math.floor(Math.random() * (max - min + 1) + min), logoImageY - 10, 8, 3);
  }

  window.addEventListener("resize", handleResize);

  function handleResize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    w = canvas.width;
    h = canvas.height;
  }


  setInterval(draw, 10);
  console.log(logoImageX, logoImageY, logoImageW, logoImageH)
}


