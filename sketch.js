function setup() {
  createCanvas(800,400);
  any=createSprite(400, 200, 50, 50);
  thing=createSprite(200,200,50,50)
}


function draw() {
  background(255,255,255);  
  drawSprites();

  thing.x=mouseX
  thing.y=mouseY
  
  if(thing.x-any.x<= thing.width/2 + any.width/2
    && any.x-thing.x<= thing.width/2 + any.width/2
    &&thing.y-any.y<= thing.height/2 + any.height/2
    && any.y-thing.y<= thing.height/2 + any.height/2){
    thing.shapeColor="red"
    any.shapeColor="blue"
  } else {
    thing.shapeColor="grey"
    any.shapeColor = "grey"
  
  } 


 
}