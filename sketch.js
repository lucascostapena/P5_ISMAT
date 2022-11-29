function setup() {
  createCanvas(1920, 1080);
}

function draw() { background(0);
  fill (255,255,0);
  beginShape();
  for (let i = 0; i < 10; i++) {
  vertex (random(width), random(height)) 
  endShape(CLOSE);
  }
  }