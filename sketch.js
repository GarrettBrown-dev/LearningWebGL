let angle = 0;

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(175);

  rectMode(CENTER);
  stroke(0);
  //fill(200, 0, 255);
  normalMaterial(); //Used predominantly for debugging.
  //translate(0, 0, mouseX); //zooms with mouse.
  //translate(mouseX - width / 2, mouseY - height / 2); moves with mouse.
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.1);
  //rect(0, 0, 150, 150);
  torus(100, 10);

  angle += 0.05;
}
