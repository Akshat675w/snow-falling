var snow


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  for (var j = 75; j <=width; j=j+50) { 
    snow.push(new Snow(j,75));
  }

}

function draw() {
  background(255,255,255);  
  drawSprites();

  for (var i = 0; i < snow.length; i++) {
    snow[i].display();   
  }
}