class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(400,680,800,40,options);
        this.width = 800;
        this.height = 40;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill(0,255,0);
        rect(pos.x,pos.y,this.width,this.height);
    }
}