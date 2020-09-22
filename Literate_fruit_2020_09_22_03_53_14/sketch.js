var banana, monkey, rock, ground;


function setup() {
  createCanvas(400, 400);
  
banana = createSprite(450,250,10,10);
//banana.setAnimation("Banana");
banana.scale=0.04;
banana.velocityX=-4;

monkey = createSprite(50,350,10,10);
//monkey.setAnimation("monkey");
monkey.scale=0.1;

rock = createSprite(450,357,10,10);
//rock.setAnimation("Stone");
rock.scale=0.1;
rock.velocityX=-4;

ground = createSprite(400,380,800,10);
ground.x = ground.width /2;
ground.velocityX=-4;

var count =0;
  
}

function draw() {
  background(220);
  
  text("Score: "+ count, 250, 100);
  
  //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
    count = Math.round(World.frameCount/4);
    
    if(rock.isTouching(monkey)){
      rock.velocityX=0;
      monkey.velocityY=0;
      banana.velocityX=0;
      ground.velocityX=0;
      count=0;
    }
  
  if (rock.x < 0){
      rock.x = ground.width/2;
    }
  
  if (banana.x < 0){
      banana.x = ground.width/2;
    }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space") && monkey.y >= 340){
      monkey.velocityY = -12 ;
    }   

    monkey.velocityY = monkey.velocityY + 0.8;
    
    monkey.collide(ground);
  drawSprites();

}