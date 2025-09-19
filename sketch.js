let playerX = 50;
let playerY = 50;
let playerSpeed = 3;


function setup() {
  createCanvas(600, 700);
}

function draw() {
  background(220);
  

  
if (keyIsDown(LEFT_ARROW)) {
  playerX -= playerSpeed;
}
if (keyIsDown(RIGHT_ARROW)) {
  playerX += playerSpeed;
}
if (keyIsDown(UP_ARROW)) {
  playerY -= playerSpeed;
}
if (keyIsDown(DOWN_ARROW)) {
  playerY += playerSpeed;
}
  
  fill(255, 5, 245);
  stroke("white")
  strokeWeight(5);
ellipse(playerX, playerY, 20, 20);

fill(0, 0, 255);
let wall1 = rect(200, 0, 30, 400);
let wall2 = rect(400, 200, 30, 400);
  
fill(0, 255, 0);
let goal = rect(550, 550, 50, 50);
  
  
let hitGoal = collideRectCircle(550, 550, 50, 50, 
                               playerX, playerY, 20);
if (hitGoal) {
  background(0);
  fill(255);
  textSize(64);
  textAlign(CENTER);
  text("YOU WIN!", width / 2, height / 2);
}


let hitWall1 = collideRectCircle(200, 0, 30, 400,
                                 playerX, playerY, 20);

if (hitWall1) {
  
  playerX = 50;
  playerY = 50;
}

let hitWall2 = collideRectCircle(400, 200, 30, 400,
                                 playerX, playerY, 20);

if (hitWall2) {
  
  playerX = 50;
  playerY = 50;
}}