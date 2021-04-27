class Ball
{
  constructor(p){

    this.ballSprite = p.createSprite(100,300,200,100);
    this.ballSprite.addAnimation('walker',"images/ball.png","images/ball2.png","images/ball3.png","images/ball4.png","images/ball5.png","images/ball6.png");
    this.speed = 32;
  //  this.random = Math.floor(Math.random() * 1064) + 600;
  //  this.radius = this.ballSprite.width*/2;
  }

   move (p) {

    // var velocitatX =   this.ballSprite.velocity.x;
     //var velocitatY =   this.ballSprite.velocity.y;
      let random = p.random(1064,516);
 	    this.ballSprite.setSpeed(5,random);

      //this.ballSprite.position.x = this.ballSprite.position.x + this.speed;

     //if (this.ballSprite.position.x > p.width || this.ballSprite.position.x < p.width ) {
      //  this.ballSprite.velocity.x =  this.ballSprite.velocity.x  *-1;

     //}

     //if (this.ballSprite.position.y <= p.height || this.ballSprite.position.y >= p.height ) {
    //    this.ballSprite.velocity.y =  this.ballSprite.velocity.y  *-1;
  //   }



   }

  bordes(p){
    if (this.ballSprite.position.x > (p.width - 8)) {
      this.ballSprite.velocity.x =  this.ballSprite.velocity.x *-1;

    }else if(this.ballSprite.position.x < 36 ) {
        this.ballSprite.velocity.x =  this.ballSprite.velocity.x *-1;
    }else if(this.ballSprite.position.y < 28) {
        this.ballSprite.velocity.y =  this.ballSprite.velocity.y  *-1;
    }else if (this.ballSprite.position.y > (p.height - 8)) {
        this.ballSprite.velocity.y =  this.ballSprite.velocity.y  *-1;
    }
  }

  colliderPlayer(p,player){
    this.ballSprite.collide(player.playerSprite,rebotarBola);
  }



}
function rebotarBola(){
//Igual es millor ficar restitution a 1, i nosaltres canviar la velocitat de forma "manual"
   if ( ballSprite.position.x < player1.playerSprite.position.x){
     this.ballSprite.velocity.x =  this.ballSprite.velocity.x *-1;
     console.log("entra")
   }
   else if (ballSprite.position.x >= player1.spritePlayer.position.x){

     this.ballSprite.velocity.x =  this.ballSprite.velocity.x *-1;
   }
 }
