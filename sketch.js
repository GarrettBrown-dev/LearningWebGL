let angle = 0;

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(175);

  rectMode(CENTER);
  noStroke();
  fill(0, 0, 255);
  //translate(0, 0, mouseX); //zooms with mouse.
  //translate(mouseX - width / 2, mouseY - height / 2); moves with mouse.
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  //rect(0, 0, 150, 150);
  torus(100, 10);

  angle += 0.05;
}
