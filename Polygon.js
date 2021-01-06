class Polygon{
    constructor(x,y,length) {
        this.length =length;
var options={
    isStatic:true,
    restitution:0.8,
    friction:0.3,
    density:1.0

}
this.body = Bodies.hexagon(x,y,length,options);
this.bodyA = bodyA;
this.polygon = loadImage("Images/polygon.png");
World.add(world,this.polygon);

    }
    display() {
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        hexagonMode(CENTER);
        stroke("green");
        strokeWeight(4);
        fill(255);
        hexagon(this.hexagon,0,0,this.length)
        pop();
    }
}