const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1, pig1;
var gameState=1
var bg
var score=0

function preload(){
    img=loadImage("sprites/images.jpg")
    datetime()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    
    ground = new Ground(600,height+30,1200,80)
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,50);
    cons=new Cons(bird.body,{x:200,y:50})
}

function draw(){
    if(bg){
    background(bg);
    }else{
        background(img)
    }
    textSize(30)
    fill("red")
    text("SCORE : "+score,900,50)
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.collide()
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.collide()
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    bird.display();
    platform.display()
    cons.display()
    
}
function mouseDragged(){
    if(gameState===1&&mouseX>=0&&mouseX<200){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased(){
    cons.dc()
    gameState=0
}
function keyPressed(){
    if(keyCode===32&&bird.body.speed<1){
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        cons.attach(bird.body)
        gameState=1
        bird.path=[]
    }
}
async function datetime(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var type=await response.json()
    var date=type.datetime
    var time=date.slice(11,13)
    console.log(time)
    if(time>=6&&time<=18){
        Bg="sprites/bg.png"
    }else{
     Bg="sprites/bg2.jpg"
    }
    bg=loadImage(Bg)
}

