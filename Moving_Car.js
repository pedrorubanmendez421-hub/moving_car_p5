// Car position variable
let carX = 0;
let carY;
let carSpeed = 3;

function setup() {
  createCanvas(800, 400);
  // Start car in the middle vertically
  carY = height / 2;
}

function draw() {
  // ===== DRAW BACKGROUND =====
  // Sky (light blue)
  background(135, 206, 235);

  // ===== BEGIN BILLBOARD HERE =====
  
  // ===== END BILLBOARD HERE =====

  // ===== DRAW GRASS =====
  fill(34, 139, 34); // Green grass
  rect(0, height / 2 + 50, width, height);

  // ===== DRAW ROAD =====
  fill(70, 70, 70); // Gray road
  rect(0, carY + 30, width, 60);
  
  // Road lines (dashed yellow line)
  stroke(255, 255, 0);
  strokeWeight(3);
  for (let i = 0; i < width; i += 40) {
    line(i, carY + 60, i + 20, carY + 60);
  }
  noStroke();

  // ===== DRAW CAR =====
  drawCar(carX, carY);

  // ===== MOVE CAR =====
  carX = carX + carSpeed;

  // Reset car when it goes off the right side
  if (carX > width + 50) {
    carX = -100;
  }
}

// Function to draw the car
function drawCar(x, y) {
  
  //grid 
  fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  
  fill("white");
 rect(275, 150, 55, 55);
  stroke('black');
  strokeWeight(5);

  line(297, 206, 297, 227);
 

  text('45 mph', 285, 177);

  
  // Car body (red)
  fill(255, 0, 0);
  rect(x, y, 100, 40, 5);

  // Car top (red)
  fill(200, 0, 0);
  rect(x + 20, y - 25, 60, 30, 5);

  // Windows (light blue)
  fill(135, 206, 250);
  rect(x + 25, y - 20, 20, 18);
  rect(x + 55, y - 20, 20, 18);

  // Wheels (black)
  fill(0);
  circle(x + 25, y + 40, 20);
  circle(x + 75, y + 40, 20);

  // Wheel rims (gray)
  fill(150);
  circle(x + 25, y + 40, 10);
  circle(x + 75, y + 40, 10);

  // Headlight (white)
  fill(255, 255, 0);
  circle(x + 95, y + 15, 8);
}
