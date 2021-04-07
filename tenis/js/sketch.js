const s = ( p ) => {

var arrayRocasMapa = [];
var arrayMenjarMapa = [];
var arrayPacmanMapa = [];
var arrayGrapeMapa = [];
var myMaze = new Maze();
var rocaImage;
var menjarImage;
var grapeImage;
var pacman = new Pacman(1*myMaze.imageSize, 1*myMaze.imageSize);
var pacmanImage;
var pacmanImage2;
var pacmanImage3;
var pacmanImage4;
var ultiPosicio;

// función que calcula y escribe el tiempo en días, horas, minutos y segundos
let soInici;
let soMoviment;
let soFinal;
var nom;
var email;
var dificultat;
p.preload = function() {
  try {
    rocaImage = p.loadImage("images/roca.bmp");
    grapeImage = p.loadImage("images/grape.png");
    menjarImage = p.loadImage("images/food.bmp");
    pacmanImage = p.loadImage("images/pacman.png");
    pacmanImage2 = p.loadImage("images/pacmanesquerra.png");
    pacmanImage3 = p.loadImage("images/pacmanUp.png");
    pacmanImage4 = p.loadImage("images/pacmanDown.png");
    p.soundFormats('mp3', 'ogg');
    soInici = p.loadSound("sons/pacman-song.mp3");
    soMoviment = p.loadSound("sons/pacman-waka-waka.mp3");
    soFinal = p.loadSound("sons/pacman-dies.mp3");
    nom = window.localStorage.getItem("nombre");
    email = window.localStorage.getItem("email");
    dificultat = window.localStorage.getItem("dificultat");

  //  font = loadFont('assets/SourceSansPro-Regular.otf');
}catch (Execption) { // non-standard
     console.log("Error al cargar les imatges");
  }
}
p.setup = function() {
  try{

  p.createCanvas(myMaze.rows*myMaze.imageSize, myMaze.columns*myMaze.imageSize);

  for (let i = 0; i < myMaze.maze.length; i++){

    for (let j = 0; j < myMaze.maze.length; j++) {
          if(myMaze.maze[i][j]=== 1){
            let rocatemp = new Roca()
            arrayRocasMapa.push(new Roca(i*myMaze.imageSize, j*myMaze.imageSize))

          }  if(myMaze.maze[i][j]=== 2){

            let menjartemp = new Menjar()
            arrayMenjarMapa.push(new Menjar(i*myMaze.imageSize, j*myMaze.imageSize))
          }
            if(myMaze.maze[i][j]=== 3){

            let grapeTemp = new Grape()
            arrayGrapeMapa.push(new Grape(i*myMaze.imageSize, j*myMaze.imageSize))
          }
          switch (dificultat) {

            case "facil":
                  p.facil();

                  break;
            case "normal":
                p.normal();
                  break;
            case "dificil":
                p.dificil();
                  break;
            default:
              p.facil();
              break;
          }


      //  if(myMaze.maze[i][j]=== 3){
        //      var pacman = new Pacman(i*myMaze.imageSize, j*myMaze.imageSize);
      //      let pacmantemp = new Pacman()
        //    arrayPacmanMapa.push(new Pacman(i*myMaze.imageSize, j*myMaze.imageSize))
         //}

    }

  }
    }catch (Execption) { // non-standard
       console.log("Error a les arrays de crear objectes");
    }
     soInici.play();

}


p.draw = function() {

try{
  p.background(0);
  arrayRocasMapa.forEach(function callback(roca) {
       roca.showInstanceMode(p,rocaImage);
    });
    arrayMenjarMapa.forEach(function callback(menjar) {
         menjar.showInstanceMode(p,menjarImage);
      });
      arrayGrapeMapa.forEach(function callback(grape) {
           grape.showInstanceMode(p,grapeImage);
        });
  //   pacman.forEach(function callback(pacman) {
           pacman.showInstanceMode(p,pacmanImage);
    //    });
for(let i = 0; i < arrayMenjarMapa.length;i++){
    if(pacman.testColliderMenjar(p,arrayMenjarMapa[i])){
      arrayMenjarMapa.splice(i,1);
      pacman.score = pacman.score += 10;
      pacman.lives = pacman.lives += 1;

      //console.log("menja")

    }else{
    //  console.log("No menja");
    }
}
for(let i = 0; i < arrayGrapeMapa.length;i++){
    if(pacman.testColliderGrape(p,arrayGrapeMapa[i])){
      arrayGrapeMapa.splice(i,1);
      pacman.score = pacman.score +=1;
      //console.log("menja")

    }else{
    //  console.log("No menja");
    }
}

for(let i = 0; i < arrayRocasMapa.length;i++){
      if(pacman.testColliderRoca(p,arrayRocasMapa[i])){

        alert("Has perdut una vida");
     }


    }



  }catch (err) { // non-standard
       console.log("Error al cargar les posicions de rocar i menjar en el array",err);
  }
  try{

    if(pacman.direction < 1 && pacman.direction > 4){
      //err = new EvalError;
      throw new EvalError('Direccio no te un valor valid');
    }
    switch (pacman.direction) {

      case 1:
          pacman.showInstanceMode(p,pacmanImage2);
            break;
      case 2:
          pacman.showInstanceMode(p,pacmanImage);
            break;
      case 3:
          pacman.showInstanceMode(p,pacmanImage3);
            break;
      case 4:
          pacman.showInstanceMode(p,pacmanImage4);
        break;
      default:

    }
  }catch (err) { // non-standard
       console.log("Error en el switch",err);
  }
    p.fill(255);
    p.textSize(40);
    p.text("Score:",10,700);
    p.text(pacman.score,150,700);
    p.text("Lives:",750,700);
    p.text(pacman.lives,875,700);
    p.text("Time:", 350,700);
    p.text(pacman.time, 470,700);
    p.text("nom:", 10,750);
    p.text(nom, 150,750);




 if (p.frameCount % 43 == 0 && pacman.time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
   pacman.time --;


 }

     if (pacman.time == 0 || pacman.lives == 0) {

       p.perdre();
     }
     else if (arrayMenjarMapa?.length == 0  && arrayGrapeMapa?.length == 0 ) {
       p.guanyar();
     }

}
p.perdre = function(){
  if (!soFinal.isPlaying()){
     soFinal.play();
   }
  p.fill(0, 0, 255);
  p.text("GAME OVER", 400,750);

  p.noLoop();

    var opcion = confirm( "Nom: " + nom + "\n" + "Email: " + email + "\n"  +
      "Dificultat: " + dificultat + "\n"  +
      "Punts: " + pacman.score + "\n" +
       "Vols tornar a jugar ? ");
    if (opcion == true) {
       window.location.reload();
	} else {
	    mensaje = "Has clickado Cancelar";
	}
}
p.guanyar = function(){
  p.fill(0, 0, 255);
  p.text("Has Guanyat", 400,750);
  window.localStorage.setItem("score",pacman.score);
  p.noLoop();
  var opcion = confirm( "Nom: " + nom + "\n" + "Email: " + email + "\n"  +
    "Dificultat: " + dificultat + "\n"  +
    "Punts: " + pacman.score + "\n" +
     "Vols tornar a jugar ?");
  if (opcion == true) {
     window.location.reload();
} else {
    mensaje = "Has clickado Cancelar";
}

}

  p.keyPressed = function(){

  let ampleImatge = myMaze.IMAGE_SIZE * myMaze.COLUMNS;
  let grandariaMapa = myMaze.IMAGE_SIZE * myMaze.ROWS;


  try{
  ultiPosicio = pacman;
  if(p.keyCode == p.LEFT_ARROW){

      pacman.moveLeft(ampleImatge);
      pacman.direction = 1;
      p.SorollMoviment();


  }
  if(p.keyCode == p.RIGHT_ARROW){
      pacman.moveRight(ampleImatge);
      pacman.direction = 2;
      p.SorollMoviment();

  }
  if(p.keyCode == p.UP_ARROW){
        pacman.moveUp(grandariaMapa);
        pacman.direction = 3;
        p.SorollMoviment();
  }
  if(p.keyCode == p.DOWN_ARROW){
      pacman.moveDown(grandariaMapa);
      pacman.direction = 4;
      p.SorollMoviment();

  }

}catch (err) { // non-standard
     console.log("Error el moviment del pacman",err);
  }

}


function send(){
    var myVar = {"id" : 1};
    console.log("tuleb siia", document.getElementById('saada').value);
    fetch("http://localhost", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(myVar)
    }).then(function(response) {
        return response.text();
    }).then(function(muutuja){
        document.getElementById('väljund').innerHTML = muutuja;
    });
}
p.SorollMoviment = function(){
 if (!soMoviment.isPlaying()){
       soMoviment.play();
  }
}
p.facil = function(){



    pacman.time = 200;
    pacman.score = 0;
    pacman.lives = 5;
//    p.draw();
//    p.setup();




}
p.normal = function(){
  //  window.location.reload();
  //  p.setup();
    pacman.time = 120;
    pacman.score = 0;
    pacman.lives = 3;

  //  p.pacman(1*myMaze.imageSize, 1*myMaze.imageSize);

}
p.dificil = function(){

    pacman.time = 70;
    pacman.score = 0;
    pacman.lives = 2;
  //  p.setup();



}
p.ajuda = function(){
    alert("Anar cap a dalt:   la tecla del cursor de dalt"+ "\n" + "Anar a l'esquerra: la tecla de cursor esquerra" + "\n" + "Anar a la dreta: la tecla del cursor dret" + "\n" + "Anar cap abaix: la tecla de abaix dels cursors" + "\n" + "Per guanyar menjat totes les peçes de menjar abans de que s'acabi el temps, i compte amb xocar que perds vides.");

}
p.creador = function(){
    alert("Aquest pacman ha estat creat per Pol Júlvez Torà durant la UF2 de la Asignatura M6 de desplegament d'aplicaions web");

}
p.informacio = function(){
    alert("El navegador que se está utilizando es Firefox"  + navigator.appVersion + "\n" +document.lastModifyed+"\n" +navigator.userAgent +"\n"+ window.location.pathname + "\n" + navigator.language);

}


 //clau tanca draw
} //clau tanca const
//array Maze = new Array[0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1];


let myp5 = new p5(s, 'joc');
