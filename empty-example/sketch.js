let shapes = [];

let triangle_down;
let triangle_up;
let triangle_left;
let triangle_right;

let circle_down;
let circle_up;
let circle_left;
let circle_right;

function setup() {
  createCanvas(600, 500);

  shapes.push(new Triangle_t(100, 100, 100, 100, "down"));
  shapes.push(new Triangle_t(200, 200, 100, 100, "up"));
  shapes.push(new Triangle_t(360, 150, 100, 100, "left"));
  shapes.push(new Triangle_t(400, 150, 100, 100, "right"));

  shapes.push(new Circle_t(100, 300, 50, "down"));
  shapes.push(new Circle_t(220, 300, 50, "up"));
  shapes.push(new Circle_t(360, 275, 50, "left"));
  shapes.push(new Circle_t(470, 275, 50, "right"));
}

function draw() {
  background(220);

  for (let i = 0; i < shapes.length; i++) {
    shapes[i].display();
  }
}

// click event handler
function mousePressed() {
  for (let i = 0; i < shapes.length; i++) {
  shapes[i].mousePressedEvent();
  }
}