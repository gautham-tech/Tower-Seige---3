class Polygon{
    constructor(x,y,width,height){
        var options = {
            isStatic : false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        fill("black");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}