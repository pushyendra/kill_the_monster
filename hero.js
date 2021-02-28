class Hero{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            friction:1.0,
            restitution:2.0,
            density:2.0
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius = 100;
        this.image=loadImage("Superhero-01.png")
        World.add(world,this.body)  
    }
    display(){
        var angle =this.body.angle
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}