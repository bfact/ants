// 9.7: Drawing Object Trails - p5.js Tutorial
// https://youtu.be/vqE8DMfOajk

let sc;
let vibrations = [];
let rocks = [];
let bg;

function setup() {
  createCanvas(600, 600);
  textFont('Roboto Mono');
  frameRate(60);
  
  for (let i = 0; i < 1; i++) {
    vibrations.push(new Particle(15, 300));
  }

  for (let i = 0; i < 10; i++) {
    rocks.push(new Rock(random(200,600), random(200,600)));
  }
  bg = loadImage("assets/dirt.png"); 
}

function draw() {
  //background(70);
  background(bg); 
  vibration();
  showRocks();

  stroke(255);
  noFill();

  let now = new Date();

  let mil = now.getMilliseconds();
  let sec = now.getSeconds() + mil / 1000;
  let s = sec / 60;

  translate(width / 8*7, height / 8);

  let x = Math.min(width, height) * 0.9;
  let x2 = x * 0.9;
  let x3 = x * 0.8;

  strokeCap(SQUARE);
  strokeWeight(10 / 1000 * x);
  textAlign(CENTER, CENTER);

  push();
  rotate(-HALF_PI);

  arc(0, 0, x3/4, x3/4, 0, s * TAU);
  pop();

  noStroke();
  fill(255);

  textSize(80 / 1000 * x);
  let clockText = [

          floor(sec)
      ]
      .map(n => ('0' + n).slice(-2))
      .join(':');
  text(clockText, 0, 0); 

  if ((frameCount/60) % 5 == 0) {
    updateRocks();
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    for (let i = 0; i < vibrations.length; i++) {
      vibrations[0].moveX(10);
    }
  } else if (keyCode === LEFT_ARROW) {
    for (let i = 0; i < vibrations.length; i++) {
      vibrations[0].moveX(-10);
    }
  }
    if (keyCode === UP_ARROW) {
    for (let i = 0; i < vibrations.length; i++) {
      vibrations[0].moveY(-10);
    }
  } else if (keyCode === DOWN_ARROW) {
    for (let i = 0; i < vibrations.length; i++) {
      vibrations[0].moveY(10);
    }
  }
  
}

// ANT
function vibration() {
    for (let i = 0; i < vibrations.length; i++) {
      vibrations[i].show();
      vibrations[i].update();
  }
}

// ROCK
function showRocks() {
    for (let i = 0; i < rocks.length; i++) {
      rocks[i].show();
  }
}

function updateRocks() {
    for (let i = 0; i < rocks.length; i++) {
      rocks[i].update();
  }
}

