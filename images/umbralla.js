class Umbrella {
    constructor(x,y){
       var options={
           isStatic: true,
       }
       this.image=loadImage("images/Walking Frame/walking_1.png");
       this.umbrella=Bodies.circle(x,y,50,options);
       this.radius=50;
     World.add(world,this.Umbrella);

     display();
     
    }
}