let angle = 0;

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  pointLight(0, 0, 255, -200, 0, 250);
  pointLight(255, 0, 0, 200, 0, 250);
  background(175);

  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);

  noStroke();
  ambientMaterial(255);
  sphere(100);

  angle += 0.03;
}

//rect(0, 0, 150, 150);
//fill(200, 0, 255);
//normalMaterial(); //Used predominantly for debugging.
//translate(0, 0, mouseX); //zooms with mouse.
//translate(mouseX - width / 2, mouseY - height / 2); moves with mouse.
