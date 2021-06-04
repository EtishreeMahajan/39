var car, wall, bg, roadImg, carImg ,wallImg;
var speed, wight;
var carSpeed, wallWeight;
var PASS, FAIL, BECAREFULL;
function preload() {
  roadImg = loadImage("road.jpg");
  carImg = loadImage("car.jpg");
  wallImg = loadImage("wall.png");
}
function setup() {
  createCanvas(1300, 600);

  speed = random(55, 90);
  wight = random(400, 1500);

  bg = createSprite(650, 300, 50, 50);
  bg.addImage("roadImg", roadImg);
  bg.scale = 4.5;

  car = createSprite(50, 450, 50, 50);
  car.addImage("car", carImg);
  camera.position.x = car.velocityX;
  car.velocityX = 20;
  carSpeed = speed;
  car.shapeColor = color(255, 255, 255);

  wall = createSprite(1250, 300, 60, height / 2);
  wall.addImage('wall',wallImg);
  wallWeight = wight
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background("black");
  drawSprites();
  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    var deformation = 0.5 * wight * speed * speed / 22500;

    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
      textSize(50);
      fill("red");
      text("FAIL", 800, 200);
    }

    else if (deformation > 100) {
      car.shapeColor = color(230, 230, 0);
      textSize(50);
      fill("yellow");
      text("BECAREFULL", 800, 200);
    }

    else {
      car.shapeColor = color(0, 255, 0);
      textSize(50);
      fill("green");
      text("PASS", 800, 200);
    }
  }
  
}