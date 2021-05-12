class Drop {

    constructor(x, y){
        var options = {
            restitution : 0.001,
            friction : 0.1,
            isStatic : false
        }
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.rainDrop = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.rainDrop);
    }

    display(){
        var pos = this.rainDrop.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }

    update(){
        if(this.rainDrop.position.y > height){
            Matter.Body.setPosition(this.rainDrop, {x: random(0, 400), y: random(0, 400)});
        }
    }

}