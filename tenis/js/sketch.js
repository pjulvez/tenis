const s = ( p ) => {

var fonsimage;
var p1;
var p2;
var ball;
var xBallChange = 5;
var yBallChange = 5;
var playerSprite;
var ballSprite;

// Player1('jugador1',p);
p.preload = function() {

    p1 = new Player("jugador1",p);
    p2 = new Player("jugador2",p);
    ball = new Ball(p);

      fontsimatge = p.loadImage("images/pista.jpg");


      try {


      //  font = loadFont('assets/SourceSansPro-Regular.otf');
    }catch (Execption) { // non-standard
         console.log("Error al cargar les imatges");
      }
    }

    p.setup = function() {
      p.createCanvas(1100,700);
      ball.move(p);
      //ball.colliderPlayer(p,p1);
    }

    p.draw = function(){
          p.background(fontsimatge);
          p.drawSprites();
          ball.bordes(p);
          ball.colliderPlayer(p,p1);
          ball.colliderPlayer(p,p2);
    }

p.keyPressed = function(){

    try{

    if(p.keyCode == p.LEFT_ARROW){
console.log("Esquerra");
        p2.moveLeftPlayer2();

    }
    if(p.keyCode == p.RIGHT_ARROW){
        p2.moveRightPlayer2();

    }
    if(p.keyCode == p.UP_ARROW){
        p2.moveUp();
          }
    if(p.keyCode == p.DOWN_ARROW){
        p2.moveDown();
      }
    if(p.key == 'a'){

        p1.moveLeftPlayer1();

    }
    if(p.key == 'd'){
        p1.moveRightPlayer1();



    }
    if(p.key == 'w'){
        p1.moveUp();


    }
    if(p.key == 's'){
        p1.moveDown();



    }

    }catch (err) { // non-standard
       console.log("Error el moviment del player1",err);
    }

}

}



let myp5 = new p5(s, 'joc');
