const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box2,box3,box4,box5;
var floor1;
var greenPig,greenPig2;
var Wood1,Wood2,Wood3,Wood4;
var angryBird;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    floor1 = new floor(600,400,1200,10);


    angryBird = new angrybird(500,500);
    greenPig = new greenpig(810,350);
    greenPig2 = new greenpig(810,220);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5  = new Box(810,160,70,70);
    Wood1 = new wood(810,260,300, PI/2);
    Wood2 = new wood(810,180,300, PI/2);
    Wood3 = new wood(760,120,150, PI/7);
    Wood4 = new wood(870,120,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);


angryBird.display();



    Wood1.display();
    Wood2.display();
    Wood3.display();
    Wood4.display();
    greenPig.display();
    greenPig2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
   floor1.display();
   
}