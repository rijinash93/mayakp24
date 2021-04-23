
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground,Paper;
var Side1,Side2,Side3;


function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	  
	Ground=new ground(400,680,800,10);
	Paper=new paper(100,675,24);
	Side1=new side(500,620,10,100);
	Side2= new side(650,620,10,100);
	Side3= new side(575,670,150,10);
	
	Engine.run(engine);
  
}
     
function draw() 
{
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 Ground.display();
 Paper.display();
 Side1.display();
 Side2.display();
 Side3.display();

 Engine.update(engine);

}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
  
	}
}


