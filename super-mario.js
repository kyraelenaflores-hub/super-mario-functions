// Player position
let x = 100;
let y = 300;
let speed = 5;

// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(120, 190, 255); // sky

  // ground
  stroke("black");
  fill(60, 200, 90);
  rect(0, 330, width, 70);
  updateJump();

  drawCourse();
  updateMovement();
  drawPlayer();
}

// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function updateMovement() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    x += speed;
  }
  
  // Keep player on screen
  x = constrain(x, 0, width - 40);
}

function keyPressed() {
  if (key === " " || key === "ArrowUp" || key === "w") {
    if (!jumping) {
      jumping = true;
      jumpFrame = 0;
    }
  }
}

function moveRight(){
  x = x + 30;
}

function moveLeft(){
  x = x - 30;
}

// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  stroke("black");
  fill("rgb(139,51,197)");
  rect(x, y, 30, 40);
  fill("rgb(214,189,137)");
  circle(x+15, y-15, 30);
}

function drawCourse(){
  stroke("rgb(75,57,32)");
  fill("rgb(148,93,15)");
  rect(200, 310, 30, 30);
  rect(400, 310, 30, 30);
  stroke("white");
  fill("white");
  drawClouds(50, 50, 50);
  drawClouds(300, 150, 60);
  drawClouds(470, 105, 50);
  drawClouds(135, 230, 50);
}

function drawClouds(x, y, r){
  circle(x, y, r);
  circle(x+20, y-20, r-10);
  circle(x+40, y, r+10);
}
