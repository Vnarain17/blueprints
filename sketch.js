function setup() {
  createCanvas(400,400);
  createSprite(200, 350, 50, 350);
  createSprite(145,350,50,300);
  createSprite(255,350,50,300);
  createSprite(310,350,50,400);
  createSprite(90,350,50,400);
  
}

function draw() {
  background("black");  
  drawSprites();
}