const s = ( p ) => {
var player1image;
var fonsimage;
    p.preload = function() {
      player1image = p.loadAnimation('images/walk0001.png','images/walk0002.png',
                                    'images/walk0003.png', 'images/walk0004.png',
                                    'images/walk0005.png', 'images/walk0006.png'
                              );

      player2image = p.loadAnimation('images/caminar1.png','images/caminar2.png','images/caminar3.png', 'images/caminar4.png',
                                   'images/caminar5.png', 'images/caminar6.png','images/caminar7.png', 'images/caminar8.png',
                                    'images/caminar9.png', 'images/caminar10.png');

      fontsimatge = p.loadImage("images/pista.jpg");
      try {


      //  font = loadFont('assets/SourceSansPro-Regular.otf');
    }catch (Execption) { // non-standard
         console.log("Error al cargar les imatges");
      }
    }

    p.setup = function() {


      p.createCanvas(1100,700);
      player1 = p.createSprite(100, 200,200,100);

      player1.addAnimation('walker', player1image);

      player1 = p.createSprite(1000, 500,200,100);

      player1.addAnimation('walker', player2image);





    }

    p.draw = function(){


          p.background(fontsimatge);
          p.drawSprites();





    }
}

let myp5 = new p5(s, 'joc');
