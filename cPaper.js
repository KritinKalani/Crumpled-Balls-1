class cPaper{
    constructor(x,y){
        var c_options = {
            isStatic: false,
            restitution: 0.3,
            friction: 1,
            density: 20
        }
        this.body = Bodies.circle(x,y,15,c_options);
        World.add(world,this.body)
    }
    display() {
        fill(0,255,0);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,15);
    }
};