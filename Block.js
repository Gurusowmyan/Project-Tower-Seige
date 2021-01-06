class Block {
    constructor(x,y,width,height) {
      this.width =width;
      this.height =height;
      

   var options={
       isStatic:true,
        restitution:0.8,
        friction:0.3,
        density:1.0

   }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height =height;
   World.add(world,this.block);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        stroke("green");
        strokeWeight(4);
        fill(255);
        rectangle(this.rectangle,0,0,this.width,this.height)
        pop();
      }
    };

