var wall;
 
var bullet,speed, weight; 
 
function setup() {
 createCanvas(1600, 400);
 
 speed=random(55,90)
 weight=random(400,1500)
 
 
 bullet=createSprite(50, 200, 50,50); 
 
 bullet.velocityX = speed;
 
 bullet.shapeColor=color(255);
 
 
 wall=createSprite(1500,200,20, height/2);
 wall.shapeColor=color("orange");
 
 
}
 
function draw() {
 background(0);
 
 if(wall.x-bullet.x < (bullet.width+wall.width)/2)
 {
 bullet.velocityX=0;
 var damage=0.5 * weight * speed* speed/22509
 if(damage>180)
 {
 bullet.shapeColor=color("blue");
 }

 if(damage<180 && damage>100){
   bullet.shapeColor=color("red");
 }
 
 if(damage<100)
 {
 bullet.shapeColor=color("yellow");
 }
 } 
 
 drawSprites();
 
}