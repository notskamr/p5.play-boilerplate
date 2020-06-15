var shape1, shape2;
function preload() {


}


function setup() {
  createCanvas(800,400);
  shape1 = createSprite(300, 200, 50, 50);
  shape2 = createSprite(100, 200, 50, 50);
  shape1.velocityX = -2;
  shape2.velocityX = 2;

}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function collide() {
if(shape1.x + 50 == shape2.x + 50) {
shape1.color = 'red';


}
}