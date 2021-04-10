class Ghost {
    constructor(x, y){
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0,
        isStatic:true
      }
      this.body = Bodies.circle(x,y,100,options);
      this.radius = 100
      this.image = loadImage("ghost.png");
      this.visibility = 255
      World.add(world,this.body)
    }
  flu() {
    Matter.Body.setStatic(this.body,false)
  }
   display(){
   
    if(this.body.speed<10){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0,this.radius,this.radius);
      pop();
    }
    

    else{
      World.remove(world,this.body);
      tint(255,this.visibility);
      this.image(this.image.this.body.position.x, this.body.position.y, 50, 50);
    }
  
     
   }
   
  
  };

