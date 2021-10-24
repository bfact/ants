class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];
  }
  
  moveX(offsetX) {
    this.x+=offsetX+random(-2,2);
    this.y+=random(-2,2);

  }
  
  moveY(offsetY){
    this.y+=offsetY+random(-2,2);
    this.x+=random(-2,2);
  }
  update() {
    this.x = this.x;// + random(-0.05, 0.05);
    this.y = this.y;// + random(-0.05, 0.05);

    let v = createVector(this.x, this.y);

    this.history.push(v);
    //console.log(this.history.length);

    if (this.history.length > 100) {
      this.history.splice(0, 1);
    }
  }

  show() {
    // trail
    stroke(255);
    strokeWeight(10);
    beginShape();
    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      noFill();
      vertex(pos.x, pos.y);
      endShape();
    }
    
    // head
    noStroke();
    fill(200);
    ellipse(this.x, this.y, 24, 24);
  }
}