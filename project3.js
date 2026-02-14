function setup() {
  createCanvas(1300, 1300);
  background(100);
}

function draw() {
  //below
  noStroke(0);
  fill(200, 0, 100);
  ellipse(mouseX, mouseY, 75, 120);
}

function mousePressed(){
  background(100)
}