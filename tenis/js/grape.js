class Grape extends GameObject
{
  constructor(coordX,coordY){
    super(coordX,coordY);
  }

/*  show() {
    //Nota: first in sketch.js preload we have to implement: img = loadImage('assets/laDefense.jpg');
    // Top-left corner of the img is at (x, y)
    // Width and height are the img's original width and heigh
    p.image(menjarImage,this.coordX,this.coordY);

  }*/

  showInstanceMode(p, grapeImage) {
    //Nota: first in sketch.js preload we have to implement: img = loadImage('assets/laDefense.jpg');
    // Top-left corner of the img is at (x, y)
    // Width and height are the img's original width and heigh
    p.image(grapeImage,this.coordX,this.coordY);

  }
}
