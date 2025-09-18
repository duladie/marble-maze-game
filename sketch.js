function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // Game loop will go here
    fill(255, 5, 245);
  strokeWeight(5);
  ellipse(300, 150, 60, 60);

// Display game title
fill(0);
textSize(24);
textAlign(CENTER);
text("Marble Maze - Coming Soon!", width/2, height/2);
}