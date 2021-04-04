
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,390,400,20);

    box1 = new Box(200,130,50,50);
    box2 = new Box(230,50,50,70);

    box3 = new Box(260,30,50,90);
    box4 = new Box(160,80,25,60);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("white");
    ground.display();
    fill("blue");
    box1.display();
    fill("orange");
    box2.display();
    fill("green");
    box3.display();
    fill("red");
    box4.display();
}

