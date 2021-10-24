class Rock {

  constructor(x, y) {
    this.x = x;
    this.y = y
  }
  
  update() {
    this.x = random(200,600);
    this.y = random(200,600);
  }

  show() {
    noStroke();
    fill(200);
    triangle(this.x, this.y, this.x+10, this.y-15, this.x+20, this.y);
  }
}

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
