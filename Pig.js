class Pig extends BaseClass{
  constructor(x,y){
    super(x,y,50,50)
    this.image=loadImage("sprites/enemy.png")
    this.t=255
  }
  display(){
    if(this.body.speed<3){ 
      super.display()
    }else{
      World.remove(world,this.body)
      push()
      this.t=this.t-5
      //this.t-=5
      tint(255,this.t)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
    }
  }
  collide(){
    if(this.t<0&&this.t>-1005){
      score++
    }
  }
}
   
  