class Particle {
    constructor(x, y, r){
        var options = {
            restitution:0.4,
            density:0.3,
            fricition:1,
            isStatic:false
        }
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.colour = color(random(20,255), random(20,255), random(20,255));
        World.add(world, this.body);
    }
    display(){
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
      }
}