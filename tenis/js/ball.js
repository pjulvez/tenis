class Ball extends GameObject
{
  constructor(coordX,coordY){
    super();
    this.coordX=coordX;
    this.coordY=coordY;
    this.speed = 32;
    this.ballSprite = {};
  }
 moveBallLeft() {
        this.ballSprite.position.x = this.ballSprite.position.x + this.speed; // Move slightly to the right every frame by changing the value of x by 1
        if (this.ballSprite.position.x > 1064){
          this.speed *= -1;
        }
        if (this.ballSprite.position.x  == 0){
          this.speed *= -1 ;
        }
  }
  moveBallRight() {



   }
   move (p) {
     var random = p.random(1064,516);
 	    this.ballSprite.setSpeed(5,random);
      if (this.ballSprite.position.x > sketch.width ) {
       this.speed = -this.speed;
     }
     if (this.ballSprite.position.y > sketch.height) {
       this.speed = -this.speed;
     }

   }



  crearSpriteBall(sprite){
      this.ballSprite = sprite;
  }

  }
