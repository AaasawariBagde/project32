const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var chain;
var ball;
var point;
var fireImg;
var ground,fire;
var slingshot;
var ghost1,ghost2,ghost3,ghost4,ghost5,ghost6,ghost7,ghost8,ghost9,ghost10,ghost11,ghost12,ghost13,ghost14,ghost15;

function preload() {
backgroundImg=loadImage("background.png");
fireImg=loadImage("fire.png");
}

function setup() {   
  createCanvas(960,470);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  strokeWeight(2);

  ground = new Ground(600,height,1200,40)

  ghost1 = new Ghost(599 ,399);
  ghost2 = new Ghost(670,399);
  ghost3 = new Ghost(740,399);
  ghost4 = new Ghost(810,399);
  ghost5 = new Ghost(890,399);
  ghost6 = new Ghost(630,315);
  ghost7 = new Ghost(700,315);
  ghost8 = new Ghost(775,315);
  ghost9 = new Ghost(850,315);
  ghost10 = new Ghost(658,230);
  ghost11 = new Ghost(735,230);
  ghost12 = new Ghost(810,230);
  ghost13 = new Ghost(697,145);
  ghost14 = new Ghost(772,145);
  ghost15 = new Ghost(745,60);

  fire = new Fire(55, 190, 30, 30);

  point = Bodies.circle(50, 200, 20);
  World.add(world, point);

  chain = new Slingshot(this.point,{x:150, y:160});

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine);

  ground.display();
  ghost1.display();
  ghost2.display();
  ghost3.display();
  ghost4.display();
  ghost5.display();
  ghost6.display();
  ghost7.display();
  ghost8.display();
  ghost9.display();
  ghost10.display();
  ghost11.display();
  ghost12.display();
  ghost13.display();
  ghost14.display();
  ghost15.display();

  
  imageMode(CENTER);
  image(fireImg, point.position.x, point.position.y, 50, 45);

  chain.display(); 

}

function mouseDragged() {

  Matter.Body.setPosition(this.point, {x: mouseX , y: mouseY});

}

function mouseReleased() {

  chain.fly();
  ghost1.flu();
  ghost2.flu();
  ghost3.flu();
  ghost4.flu();
  ghost5.flu();
  ghost6.flu();
  ghost7.flu();
  ghost8.flu();
  ghost9.flu();
  ghost10.flu();
  ghost11.flu();
  ghost12.flu();
  ghost13.flu();
  ghost14.flu();
  ghost15.flu();

}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(fire.body);
  }
}