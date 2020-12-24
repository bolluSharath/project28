class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.2,
            friction:0.1,
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        

        this.image=loadImage("stone.png")
        World.add(world,this.body)
    }

    display(){
        push()
        var pos=this.body.position

        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}