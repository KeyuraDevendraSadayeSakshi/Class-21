var bullet,speed,weight;
var wall, thickness;


function setup() {
  createCanvas(1200,400);

  thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,52);

  bullet = createSprite(40, 200, 20, 20);
  bullet.velocityX=speed;


  wall = createSprite(1100, 200, thickness, height/2);
 wall.shapeColor = color(80,80,80)
}

function draw() {
  background(5,25,55);  

  if(hasCollided(bullet,wall))
{
bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed /(thickness *thickness *thickness);
if (damage>10)
{
wall.shapeColor = color(139,0,0);
}
if(damage<10)
{
wall.shapeColor= color (0,128,0);
}
}
  drawSprites();
}

function hasCollided (lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge =lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
  return true
  }
   return false;
  }