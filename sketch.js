const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground;
var hero;
var flys;
var Background;

function preload(){
    Background = loadImage("Background.png");
    
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20)
    hero=new Hero(250,250,10);
    flys=new Fly(hero.body,{x:300,y:200});

}

function draw(){
    background(Background)
    
    Engine.update(engine);
    flys.display();
    ground.display();
    hero.display();
    
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(hero.body,hero.body.position,{x:2,y:-3});      
    }
}
function mouseDragged(){
   Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
flys.fly();
}
