
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(150,500,40);
	bobObject2 = new Bob(230,500,40);
	bobObject3 = new Bob(310,500,40);
	bobObject4 = new Bob(390,500,40);
	bobObject5 = new Bob(470,500,40);
	roof1= new Roof(300,200,400,30);
	rope1= new Rope(bobObject1.body,{x: 150, y: 210});
	rope2= new Rope(bobObject2.body,{x: 230, y: 210});
	rope3= new Rope(bobObject3.body, {x: 310, y: 210});
	rope4= new Rope(bobObject4.body, {x: 390, y: 210});
	rope5= new Rope(bobObject5.body, {x: 470, y: 210});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode== LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -250, y: -50})
	}
}


