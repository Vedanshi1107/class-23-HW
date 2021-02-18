class package{
    constructor(x,y,width,height)
     var options = {
        'restitution': 0.5,
        'friction': 0.3,
        'density':0.6
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = heigth;

    World.add(world,this.body);

}











