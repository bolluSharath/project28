
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeImage,tree1;
var boyImage,boy1;
var Stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var BG;



function preload()
{
	boyImage=loadImage("boy.png")
	treeImage=loadImage("tree.png")
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	BG=new ground();
	Stone1=new Stone(100,460,50,50)	
	
	mango1=new Mango(600,290,35,50)
	mango2=new Mango(855,325,35,50)
	mango3=new Mango(670,260,35,50)
	mango4=new Mango(730,200,35,50)
	mango5=new Mango(710,320,35,50)
	mango6=new Mango(780,250,35,50)
	mango7=new Mango(825,170,35,50)
	mango8=new Mango(880,260,35,50)
	mango9=new Mango(940,220,35,50)
	mango10=new Mango(980,305,35,50)

	Throw1=new Throw(Stone1.body,{x: 100,y: 450})
	
	tree=createSprite(775,368)
	tree.addImage(treeImage)
	tree.scale=0.42

	boy1=createSprite(160,550)
	boy1.addImage(boyImage)
	boy1.scale=0.125

	Engine.run(engine);
	
}


function draw() {
	rectMode(CENTER)
	background("grey")


	detectCollision(Stone1,mango1)
	detectCollision(Stone1,mango2)
	detectCollision(Stone1,mango3)
	detectCollision(Stone1,mango4)
	detectCollision(Stone1,mango5)
	detectCollision(Stone1,mango6)
	detectCollision(Stone1,mango7)
	detectCollision(Stone1,mango8)
	detectCollision(Stone1,mango9)
	detectCollision(Stone1,mango10)
	
	
  drawSprites();

    BG.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	Stone1.display();
	Throw1.display();

}


function mouseDragged(){
	Matter.Body.setposition(Stone1.body,{x:mouseX,y:mouseY})
}

function Released(){
	Throw1.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	Stone1BodyPosition=lstone.body.position

	var distance=dist(Stone1BodyPosition.x,Stone1BodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lstone.r+lmango.r){
		Matter.Body.setStatic(lmango.body,false)
	}


}

