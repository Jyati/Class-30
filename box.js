class Box {
    constructor(x, y) {
        var options = {
            restitution: 0.4,
            friction: 0.01
            //density: 1.0
        }
        this.Visibility = 255;
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        World.add(myWorld, this.body);

    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        if (this.body.speed < 3) {
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else {
            World.remove(myWorld, this.body);
            push();
            this.Visibility = this.Visibility - 5;
            pop();
        }
    }
}