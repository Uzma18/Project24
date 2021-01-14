
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(20,650,20);
	ground1=new Ground(600,700,1200,40);
	dustbin1=new Dustbin(920,680);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  ground1.display();
  dustbin1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:75,y:205})
	}
}



