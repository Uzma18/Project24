class Dustbin{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.leftBody = Bodies.rectangle(x-50,y-24,15, 36, options);
        this.leftBody.width=15;
        this.leftBody.height=36;
        World.add(world,this.leftBody);
        this.rightBody = Bodies.rectangle(x+50,y-24,15, 36, options);
        this.rightBody.width=15;
        this.rightBody.height=36;
        World.add(world,this.rightBody);
        this.baseBody = Bodies.rectangle(x,y,100, 15, options);
        this.baseBody.width=100;
        this.baseBody.height=15;
        World.add(world,this.baseBody);

    }

    display(){
        var pos1=this.leftBody.position;
        rectMode(CENTER);
        fill("red");
        rect(pos1.x,pos1.y,this.leftBody.width,this.leftBody.height);
        var pos2=this.rightBody.position;
        rectMode(CENTER);
        fill("red");
        rect(pos2.x,pos2.y,this.rightBody.width,this.rightBody.height);
        var pos3=this.baseBody.position;
        rectMode(CENTER);
        fill("red");
        rect(pos3.x,pos3.y,this.baseBody.width,this.baseBody.height);
    }
}