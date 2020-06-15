var shape1, shape2;


function setup() {
  createCanvas(800,400);
  shape1 = createSprite(300, 200, 50, 50);
  shape2 = createSprite(200, 200, 50, 50);
  //shape1.velocityX = -2;
  //shape2.velocityX = 2;

}

function draw() {
  background(255,255,255);  
  
  shape2.x = World.mouseX
  shape2.y = World.mouseY
  //collide();
  if(shape1.x - shape2.x < shape1.width/2 + shape2.width/2 &&
    shape2.x - shape1.x < shape2.width/2 + shape1.width/2 &&
    shape1.y - shape2.y < shape1.height/2 + shape2.height/2 &&
    shape2.y - shape1.y < shape2.height/2 + shape1.height/2) {
  shape1.shapeColor = 'red';
  shape2.shapeColor = 'lime';
  
  
  }
  
  else {
  shape1.shapeColor = 'grey';
  shape2.shapeColor = 'grey';
  
  }
  drawSprites();
}

//function collide() {

//}