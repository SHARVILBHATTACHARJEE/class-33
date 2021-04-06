class Cons{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1,
            length : 5
        }
        this.cons=Constraint.create(options)
         this.pointB=pointB
        World.add(world,this.cons)
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.cons.bodyA){
        push()
        stroke(48,22,8)
        strokeWeight(4)
        if(this.cons.bodyA.position.x<220){
        line(this.cons.bodyA.position.x-20,this.cons.bodyA.position.y,this.pointB.x+30,this.pointB.y)
        line(this.cons.bodyA.position.x-20,this.cons.bodyA.position.y,this.pointB.x-10,this.pointB.y)
        image(this.sling3,this.cons.bodyA.position.x-30,this.cons.bodyA.position.y-10,15,30)
        }else{
        line(this.cons.bodyA.position.x+25,this.cons.bodyA.position.y,this.pointB.x+30,this.pointB.y)
        line(this.cons.bodyA.position.x+25,this.cons.bodyA.position.y,this.pointB.x-10,this.pointB.y)
        image(this.sling3,this.cons.bodyA.position.x+25,this.cons.bodyA.position.y-10,15,30)
        }
        pop()
    }
    }
    dc(){
        this.cons.bodyA=null
    }
    attach(body){
        this.cons.bodyA=body
    }
}