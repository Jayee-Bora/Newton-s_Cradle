class Rope{
    constructor(bodyA, pointB){
       
   var options={
       bodyA: bodyA,
       pointB: pointB,
       length:400,
      
      
   }
   this.Rope=Matter.Constraint.create(options)
   World.add(world,this.Rope)
    }
    display(){
        line(this.Rope.bodyA. position.x,this.Rope.bodyA.position.y,this.Rope.pointB.x,this.Rope.pointB.y)
    }
}