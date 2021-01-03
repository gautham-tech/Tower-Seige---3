const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    strip = new Ground(550,300,240,10);
//1
    box1 = new Box(460,280,30,30);
    box2 = new Box(490,280,30,30);
    box3 = new Box(520,280,30,30);
    box4 = new Box(550,280,30,30);
    box5 = new Box(580,280,30,30);
    box6 = new Box(610,280,30,30);
    box7 = new Box(640,280,30,30);
   
//2
    box8 = new Box(490,250,30,30);
    box9 = new Box(520,250,30,30);
    box10 = new Box(550,250,30,30);
    box11 = new Box(580,250,30,30);
    box12 = new Box(610,250,30,30);
   
//3
    box13 = new Box(520,220,30,30);
    box14 = new Box(550,220,30,30);
    box15 = new Box(580,220,30,30);

//4
    box16 = new Box(550,190,30,30);
    

    polygon = new Polygon(150,220,30,30);

    sling = new Sling(polygon.body,{x : 150, y : 220});

}

function draw(){
    background(0);
    Engine.update(engine);
    getBackground();
   

    textSize(35)
    fill("white")
    text("Score " + score, width-300, 50)

    ground.display();
    strip.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
   
    polygon.display();
    sling.display();
   
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
   
    drawSprites();
}   
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x : mouseX, y : mouseY})
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x : 150, y : 180});
      sling.attach(polygon.body);
    }
  }
  async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        background(0,255,0);
    }
    else{
        background(255,0,255);
    }
}