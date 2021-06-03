
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

var paper,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,680,800,40);
	World.add(world,ground1)

	paper = new cPaper(50,50);
	World.add(world, paper)

	//Create the Bodies Here.
	carrier1 = new Carrier(640,625,20,70);
	World.add(world,carrier1) 
   carrier2 = new Carrier(700,650,100,20);
   World.add(world,carrier2)
   carrierF = new Carrier(750,625,20,70);
   World.add(world,carrierF)
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground1.display();
  carrier1.display();
	carrier2.display();
	carrierF.display();
	keyPressed();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


