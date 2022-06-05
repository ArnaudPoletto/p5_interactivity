class Circle_t {
    constructor(x, y, radius, orientation) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.orientation = orientation;

      this.setRandomColor();
    }

    setRandomColor() {
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }
  
    display() {
      push();
  
      fill(this.r, this.g, this.b);
      noStroke();
      translate(this.x, this.y);
  
      let angle_start;
      let angle_end;
      if (this.orientation == "up") {
        translate(0, this.radius);
        angle_start = PI;
        angle_end = 2 * PI;
      } else if (this.orientation == "down") {
        angle_start = 0;
        angle_end = PI;
      } else if (this.orientation == "right") {
        translate(-this.radius, this.radius);
        angle_start = (3.0 / 2.0) * PI;
        angle_end = (1.0 / 2.0) * PI;
      } else if (this.orientation == "left") {
        translate(0, this.radius);
        angle_start = (1.0 / 2.0) * PI;
        angle_end = (3.0 / 2.0) * PI;
      }
  
      arc(0, 0, 2 * this.radius, 2 * this.radius, angle_start, angle_end);
  
      pop();
    }

    isWithinBounds() {
        let d;
        if (this.orientation == "up") {
            d = dist(mouseX, mouseY, this.x, this.y + this.radius);
            return d < this.radius && mouseY < this.y + this.radius;
        } else if (this.orientation == "down") {
            d = dist(mouseX, mouseY, this.x, this.y);
            return d < this.radius && mouseY > this.y;
        } else if (this.orientation == "right") {
            d = dist(mouseX, mouseY, this.x - this.radius, this.y + this.radius);
            return d < this.radius && mouseX > this.x - this.radius;
        } else if (this.orientation == "left") {
            d = dist(mouseX, mouseY, this.x, this.y + this.radius);
            return d < this.radius && mouseX < this.x;
        }
        return false;
    }

    mousePressedEvent() {
        if(this.isWithinBounds()){
            this.setRandomColor();
        }
    }
  }
  