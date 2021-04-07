class Pacman extends GameObject
{
  constructor(coordX,coordY){
    super(coordX,coordY);
    this.coordX=coordX;
    this.coordY=coordY;
    this.direction=0;
    this.score =0;
    this.lives = 3;
    this.speed = 32;
    this.time = 60;
  
  }

  testColliderMenjar(p,menjar){
      let distanceMenjar = p.dist(this.coordX,this.coordY,menjar.coordX,menjar.coordY);
      return distanceMenjar < IMAGE_SIZE;




  }
  testColliderGrape(p,grape){
      let distanceMenjar = p.dist(this.coordX,this.coordY,grape.coordX,grape.coordY);
      return distanceMenjar < IMAGE_SIZE;




  }
  testColliderRoca(p,roca){
      let distanceRoca = p.dist(this.coordX,this.coordY,roca.coordX,roca.coordY);

      if(distanceRoca < 16){
          if(this.direction === 2 ){
            this.coordX = this.coordX - this.speed;
            console.log("xoca")
          }else if(this.direction === 1 ){
            this.coordX = this.coordX + this.speed;

          }else if(this.direction === 4 ){
            this.coordY = this.coordY - this.speed;

          }else if(this.direction === 3 ){
            this.coordY = this.coordY + this.speed;
          }
          this.lives -=1;
      }
  return distanceRoca < IMAGE_SIZE;
  }
  showInstanceMode(p, pacmanImage) {
    //Nota: first in sketch.js preload we have to implement: img = loadImage('assets/laDefense.jpg');
    // Top-left corner of the img is at (x, y)
    // Width and height are the img's original width and heigh
    p.image(pacmanImage,this.coordX,this.coordY);

  }

  moveRight(ampleImatge){
    this.coordX=this.coordX + this.speed;
    if(this.coordX  > 932){
        this.coordX = 932;

      }
  }
  moveLeft(ampleImatge){

        this.coordX = this.coordX - this.speed;
        if(this.coordX  < 0){
            this.coordX = 0;

          }
  }
  moveUp(grandariaMapa){
      this.coordY = this.coordY - this.speed;
      if(this.coordY  < 0){
          this.coordY = 0;

      }
  }
  moveDown(grandariaMapa){
      this.coordY = this.coordY + this.speed;
      if(this.coordY  > 602){
          this.coordY = 602;

      }
  }
}
