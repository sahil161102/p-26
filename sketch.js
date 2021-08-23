var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	//Create a Ground
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  line1=createSprite(360,665,200,10)
  line1.shapeColor=color("red")

  line2=createSprite(260,620,10,100)
  line2.shapeColor=color("red")

  line3=createSprite(460,620,10,100)
  line3.shapeColor=color("red")

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 controls();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false);
  }
}
  function controls()
{
	if(packageSprite.y==200){
	if(keyDown(LEFT_ARROW)){
		packageBody.position.x = packageBody.position.x -2;
		helicopterSprite.position.x -=2;
	}
	if(keyDown(RIGHT_ARROW)){
		packageBody.position.x = packageBody.position.x +2;
		helicopterSprite.position.x +=2;
	}
}
// Mam there is problem in my code that package follow projectile motion if we use arrow keys.
}



