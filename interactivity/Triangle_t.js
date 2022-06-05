class Triangle_t {

    constructor(x, y, width, height, orientation) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
        fill(this.r, this.g, this.b)
        noStroke();
        translate(this.x, this.y);

        let x1;
        let y1;
        let x2;
        let y2;
        let x3;
        let y3;

        if (this.orientation == "down") {
            x1 = -this.width / 2.0;
            y1 = 0;
            x2 = this.width / 2.0;
            y2 = 0;
            x3 = 0;
            y3 = this.height;
        }else if (this.orientation == "up") {
            x1 = -this.width / 2.0;
            y1 = 0;
            x2 = this.width / 2.0;
            y2 = 0;
            x3 = 0;
            y3 = -this.height;
        }else if (this.orientation == "left") {
            x1 = 0;
            y1 = -this.height / 2.0;
            x2 = 0;
            y2 = this.height / 2.0;
            x3 = -this.width;
            y3 = 0;
        }else if (this.orientation == "right") {
            x1 = 0;
            y1 = -this.height / 2.0;
            x2 = 0;
            y2 = this.height / 2.0;
            x3 = this.width;
            y3 = 0;
        }

        triangle(x1, y1, x2, y2, x3, y3);

        pop();
    }

    isWithinBounds() {
        let fx, gx, hx;
        let x = this.x;
        let y = this.y;
        let w = this.width;
        let h = this.height;

        if (this.orientation == "down") {
            fx = 2.0*h*mouseX/w - mouseY + h + y - 2.0*h*x/w;
            gx = -2.0*h*mouseX/w - mouseY + h + y + 2.0*h*x/w;
            hx = y-mouseY;
            return fx > 0 && gx > 0 && hx < 0;
        } else if (this.orientation == "up") {
            fx = -2.0*h*mouseX/w - mouseY - h + y + 2.0*h*x/w;
            gx = 2.0*h*mouseX/w - mouseY - h + y - 2.0*h*x/w;
            hx = y - mouseY;
            return fx < 0 && gx < 0 && hx > 0;
        } else if (this.orientation == "left") {
            fx = -w*mouseX/(2.0*h) - mouseY + y - w/2.0 + w*x/(2.0*h);
            gx = w*mouseX/(2.0*h) - mouseY + y + w/2.0 - w*x/(2.0*h);
            hx = x-mouseX;
            return fx < 0 && gx > 0 && hx > 0;
        } else if (this.orientation == "right") { 
            fx = w*mouseX/(2.0*h) - mouseY + y - w/2.0 - w*x/(2.0*h);
            gx = -w*mouseX/(2.0*h) - mouseY + y + w/2.0 + w*x/(2.0*h);
            hx = x - mouseX;
            return fx < 0 && gx > 0 && hx < 0;
        }
    }

    mousePressedEvent() {
        if(this.isWithinBounds()){
            this.setRandomColor();
        }
    }
}