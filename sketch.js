const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,ground;
var polygon,slingShot;


function preload() {

}

function setup () {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(330,225,40,40);
    //slingShot = new SlingShot(block.body.{x:200,y:50});
    Engine.run(engine);
}
function draw () {
    background(0);
    Engine.update(engine);
    drawSprites();
    block1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    slingShot.fly();
}