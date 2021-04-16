class Player1 extends GameObject
{
  constructor(coordX,coordY){
    super();
    this.coordX=coordX;
    this.coordY=coordY;
    this.direction=0;
    this.lives = 3;
    this.speed = 32;
    this.playerSprite = {};
    


  }

  moveRightPlayer1(){
          this.playerSprite.position.x=  this.playerSprite.position.x + this.speed;
          if(this.playerSprite.position.x  > 516){
            this.playerSprite.position.x = 516;

          }
  }
  moveLeftPlayer1(){

        this.playerSprite.position.x =   this.playerSprite.position.x - this.speed;
        if(this.playerSprite.position.x  < 36){
          this.playerSprite.position.x = 36;

        }
  }
  moveRightPlayer2(){
          this.playerSprite.position.x=  this.playerSprite.position.x + this.speed;

          if(this.playerSprite.position.x  > 1064){
            this.playerSprite.position.x = 1064;

          }
  }
  moveLeftPlayer2(){

        this.playerSprite.position.x =   this.playerSprite.position.x - this.speed;
        if(this.playerSprite.position.x  < 584){
          this.playerSprite.position.x = 584;

        }
  }
  moveUp(){
          this.playerSprite.position.y =   this.playerSprite.position.y - this.speed;
          if(this.playerSprite.position.y  < 28){
            this.playerSprite.position.y = 20;

          }
  }
  moveDown(){
        this.playerSprite.position.y = this.playerSprite.position.y + this.speed;
        if(this.playerSprite.position.y  > 630){
          this.playerSprite.position.y = 630;

        }

  }

  crearSprite(sprite){
      this.playerSprite = sprite;
  }


}
