
var monkey , monkey_running;
var bananaGroup, ObstaclesGroup;
var ground;
var score;
var banana , obstacle;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600 , 600);
   
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX =-4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
 
}


function draw() {
  background("white");
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space"))
  {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
 
  
 
  
  
  
   bananaGroup = createGroup();
  ObstaclesGroup = createGroup();
  
  bananas();
 
  
  
  

  drawSprites();
  
   var SurvivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:" + SurvivalTime, 100,50);
  
  
}


function bananas(){
  if (frameCount%80 === 0){
    
    banana = createSprite(620,120, 50, 50 )
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-4;          
    banana.lifetime = 220;
    bananaGroup.add(banana);
    bananaGroup.add(banana);

    
  }
}
 
function obstacles(){
  if(franeCount%200 === 0){
    
   obstacle = createSprite(620,253,50,50);
    obstacle.addAnimation("rock",obstacleImg);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obsatcle.lifetime = 220;
    ObstaclesGroup.add(obstacle);
    ObstaclesGroup.add(obstacle);
    
  }
}

  
  
