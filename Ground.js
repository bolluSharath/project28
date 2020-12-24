class ground{
    constructor(){
        var options={
            isStatic:true,
            frictions:0.4,
        }

        this.body=Bodies.rectangle(500,625,1200,20,options);
        World.add(world,this.body)
    }

    display(){
        rectMode(CENTER)
        fill("green")
        rect(500,625,1800,20)
    }
}