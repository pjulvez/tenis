class Ball extends GameObject
{
  constructor(coordX,coordY){
    super();
    this.coordX=coordX;
    this.coordY=coordY;
    this.speed = 32;
    this.ballSprite = {};
  }
 moveBall() {
        this.ballSprite.position.x = this.ballSprite.position.x + this.speed; // Move slightly to the right every frame by changing the value of x by 1
        if (this.ballSprite.position.x > 1064){
          this.speed *= -1;
        }
        if (x == 0){
          this.speed *= -1 ;
        }
  }



  crearSpriteBall(sprite){
      this.ballSprite = sprite;
  }

  }
