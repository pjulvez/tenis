const s = ( p ) => {
var player1image;
var fonsimage;
var ballimatge;
var player1Estatic;
var p1 = new Player1(100,200);
var p2 = new Player1(1000,500);
var playerSprite;
var ballSprite;
var player2;
var ball = new Ball(100,300);
var xBallChange = 5;
var yBallChange = 5;

var ballGame = new Ball();

// Player1('jugador1',p);
p.preload = function() {

      player1Estatic = p.loadImage("images/walk0001.png");
      player1image = p.loadAnimation('images/walk0002.png',
                                    'images/walk0003.png', 'images/walk0004.png',
                                    'images/walk0005.png', 'images/walk0006.png'
                              );

      player2image = p.loadAnimation('images/caminar1.png','images/caminar2.png','images/caminar3.png', 'images/caminar4.png',
                                   'images/caminar5.png', 'images/caminar6.png','images/caminar7.png', 'images/caminar8.png',
                                    'images/caminar9.png', 'images/caminar10.png');

      fontsimatge = p.loadImage("images/pista.jpg");

      ballimatge = p.loadAnimation("images/ball.png","images/ball2.png","images/ball3.png","images/ball4.png","images/ball5.png","images/ball6.png");
      try {


      //  font = loadFont('assets/SourceSansPro-Regular.otf');
    }catch (Execption) { // non-standard
         console.log("Error al cargar les imatges");
      }
    }

    p.setup = function() {


      p.createCanvas(1100,700);
      playerSprite = p.createSprite(p1.coordX,p1.coordY,200,100);

      playerSprite.addAnimation('walker', player1image);
      p1.crearSprite(playerSprite);
      player2 = p.createSprite(p2.coordX, p2.coordY,200,100);
      player2.addAnimation('walker', player2image);
      p2.crearSprite(player2);
      ballSprite = p.createSprite(ball.coordX, ball.coordY,200,100);
      ballSprite.addAnimation("walker",ballimatge);
      ball.crearSpriteBall(ballSprite);





    }



    p.draw = function(){


          p.background(fontsimatge);
          p.drawSprites();
          ball.moveBall();
      ;
          switch (p1.playerSprite.direction) {

      case 1:
          p1.playerSprite.showInstanceMode(p,player1image);
            break;
      case 2:
          p1.playerSprite.showInstanceMode(p,player1image);
            break;
      case 3:
          p1.playerSprite.showInstanceMode(p,player1image);
            break;
      case 4:
          p1.playerSprite.showInstanceMode(p,player1image);
        break;
      default:

    }





    }

p.keyPressed = function(){

    try{

    if(p.keyCode == p.LEFT_ARROW){

        p2.moveLeftPlayer2();
        p2.direction = 1;



    }
    if(p.keyCode == p.RIGHT_ARROW){
        p2.moveRightPlayer2();
        p2.direction = 2;

    }
    if(p.keyCode == p.UP_ARROW){
        p2.moveUp();
        p2.direction = 3;


    }
    if(p.keyCode == p.DOWN_ARROW){
        p2.moveDown();
        p2.direction = 4;



    }
    if(p.key == 'a'){

        p1.moveLeftPlayer1();
        p1.direction = 1;



    }
    if(p.key == 'd'){
        p1.moveRightPlayer1();
        p1.direction = 2;


    }
    if(p.key == 'w'){
        p1.moveUp();
        p1.direction = 3;

    }
    if(p.key == 's'){
        p1.moveDown();
        p1.direction = 4;


    }

    }catch (err) { // non-standard
       console.log("Error el moviment del player1",err);
    }

}

}



let myp5 = new p5(s, 'joc');
