function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  push();
  background(70);
  translate(300, 300);
  rotate(-90);
  
  // draw the clock
  secondFill();
  minuteFill();
  hourFill();

  // print the value of minute()
  // once every minute
  if(second() === 0 && frameCount % 72 == 0){
    print(minute());
  }

  pop();
}

function secondFill() {
  let s = second();
  let secAngle = map(s, 0, 60, 0, 360);
  strokeCap(SQUARE);

  noFill();
  strokeWeight(40);
  stroke(0, 195, 195, 30);
  arc(0, 0, 100, 100, 0, 360);

  noFill();
  stroke(0, 195, 195);
  arc(0, 0, 100, 100, 0, secAngle);
}

function minuteFill() {
  let m = minute();
  let minAngle = map(m, 0, 60, 0, 360);
  strokeCap(SQUARE);

  noFill();
  stroke(247, 197, 100, 40);
  arc(0, 0, 200, 200, 0, 360);

  noFill();
  stroke(247, 197, 100);
  arc(0, 0, 200, 200, 0, minAngle);
}

function hourFill() {
  let h = hour();
  let hrAngle = map(h % 24, 0, 24, 0, 360);
  strokeCap(SQUARE);

  noFill();
  stroke(219, 76, 107, 30);
  arc(0, 0, 300, 300, 0, 360);

  noFill();
  stroke(219, 76, 107);
  arc(0, 0, 300, 300, 0, hrAngle);
}
