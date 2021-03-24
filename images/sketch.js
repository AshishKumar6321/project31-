const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thunder1,thunder2,thunder3,thunder4;

var engine, world;
function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
    walking1=loadImage("images/Walking Frame/walking_1.png");
    walking2=loadImage("images/Walking Frame/walking_2.png");
    walking3=loadImage("images/Walking Frame/walking_3.png");
    walking4=loadImage("images/Walking Frame/walking_4.png");
    walking5=loadImage("images/Walking Frame/walking_5.png");
    walking6=loadImage("images/Walking Frame/walking_6.png");
    walking7=loadImage("images/Walking Frame/walking_7.png");
    walking8=loadImage("images/Walking Frame/walking_8.png");

    
    
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    



}

function draw(){
    






    rand=Math.round(random(1,4));
    if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder=createSprite(random(10,370),random(10,30),10,10);
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        case 3: thunder1.addImage(thunder3);
        break;
        case 4: thunder1.addImage(thunder4);
        break;
        default:break;
    }
thunder.scale=random(0.3,0.6)
}

if(thunderCreatedFrame +10===frameCount && thunder){
    thunder.destroy();
}

umbrella.display();

for(var i=0;i<Drop;i++){
    drop[i].Droup();
    drop[i].updateY()
}

drawSprites();

}   

