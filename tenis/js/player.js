class Player
{
  constructor(str,p){
    this.speed = 32;
    this.punts = 0
    if(str == "jugador1"){
      this.playerSprite = p.createSprite(100,200,200,100);
      this.playerSprite.addAnimation('walker','images/walk0002.png',
                                    'images/walk0003.png', 'images/walk0004.png',
                                    'images/walk0005.png', 'images/walk0006.png');
      this.playerSprite.immovable = true;

    }
    if(str == "jugador2"){
      this.playerSprite = p.createSprite(1000,500,200,100);
      this.playerSprite.addAnimation('walker','images/caminar1.png','images/caminar2.png','images/caminar3.png', 'images/caminar4.png',
                                   'images/caminar5.png', 'images/caminar6.png','images/caminar7.png', 'images/caminar8.png',
                                    'images/caminar9.png', 'images/caminar10.png');
      this.playerSprite.immovable = true;

    }



  }

  moveRightPlayer1(){
          this.playerSprite.position.x=  this.playerSprite.position.x + this.speed;
          if(this.playerSprite.position.x  > 516){
            this.playerSprite.position.x = 516;
            console.log(this.playerSprite.position);

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




}
