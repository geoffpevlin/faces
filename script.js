function setup() {
  let x = 100;
  let y = 100;
  let posX = 100;
  let posY = 100;

  createCanvas(460, 550);
  //rectMode(CENTER);

  let button = createButton("New Faces");
  button.position(windowWidth / 2, 525);
  button.mousePressed(setup);

  for (j = 0; j <= 8; j++) {
    //for(i = 0; i < random(10, 20); i++){
    for (i = 0; i < 1; i++) {
      //ellipse(150, 150, x, y)
      noFill();
      //strokeWeight(random(1, 5))
      strokeWeight(2);

      let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);
      let o = random(0, 255);

      let eyer = random(0, 255);
      let eyeg = random(0, 255);
      let eyeb = random(0, 255);
      let eyeo = random(100, 255);

      // left eye sizes
      let leyex = x - random(60, 100);
      let leyey = x - random(60, 100);

      // right eye sizes
      let reyex = x - random(60, 100);
      let reyey = x - random(60, 100);

      fill(r, g, b, o);
      //noStroke();
      //stroke(random(0, 255), random(0, 255), random(0, 255))
      ellipse(posX, posY, x, y);

      ellipse(posX, posY + 10, x - 90, y - 90);

      //mouth
      //fill(0)
      ellipse(posX, posY + 30, x - random(50, 100), y - random(75, 100));

      //eyes
      fill(eyer, eyeg, eyeb, eyeo);
      // ellipse(posX-20, posY-10, leyex, leyey)
      // ellipse(posX+20, posY-10, reyex, reyey)

      ellipse(posX - 20, posY - 10, leyex, leyey);
      ellipse(posX + 20, posY - 10, leyex, leyey);

      x = x - 10;
      y = y - 10;
    }

    x = 100;
    y = 100;
    posX += 150;

    //  if(j % 5 == 0){
    if (posX > 400) {
      posY += 150;
      posX = 100;
    } else {
      posY = posY;
    }
  }

  //save("myFace.png");
}
