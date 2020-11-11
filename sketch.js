var fixedRect, movingRect,Rect1,Rect2

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,50,50);
  Rect1 = createSprite(300,100,50,50)
  Rect1.velocityY=5
  Rect1.shapeColor="Orange"
  Rect2 = createSprite(300,350,50,50)
  Rect2.velocityY=-5
  Rect2.shapeColor="Purple"
}

function draw() {
  background(0);  
  movingRect.x=mouseX
  movingRect.y=mouseY
  textSize(20);
  fill ("yellow")
  text(fixedRect.x-movingRect.x,100,100)
  text(fixedRect.width/2+movingRect.width/2,100,200)
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
      movingRect.shapeColor="red"
      fixedRect.shapeColor="skyblue"
    }
    else{
      movingRect.shapeColor="pink"
      fixedRect.shapeColor="green" 
    }
    if(Rect1.x-Rect2.x<=Rect1.width/2+Rect2.width/2&&
      Rect2.x-Rect1.x<=Rect1.width/2+Rect2.width/2){
        Rect1.velocityX=Rect1.velocityX*(-1)
        Rect2.velocityX=Rect2.velocityX*(-1)
      }
    if(Rect1.y-Rect2.y<=Rect1.height/2+Rect2.height/2&&
      Rect2.y-Rect1.y<=Rect1.height/2+Rect2.height/2){
        Rect1.velocityY=Rect1.velocityY*(-1)
        Rect2.velocityY=Rect2.velocityY*(-1)
      }
  drawSprites();
}