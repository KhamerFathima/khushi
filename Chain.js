class Chain{
constructor(bodyA, bodyB){

    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10
    }
    this.chain= Constraint.create(options);
    World.add(world, chain);

}
display(){



    
}

}



