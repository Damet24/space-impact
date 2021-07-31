import projectile from "./projectile.js";

class player {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.sprite = "./assets/Ship.png"
        this.lives = 3;
        this.points = 0;
    }

    move(dx,dy){
        this.x += dx;
        this.y += dy;
    }

    getPoints(){
        return this.points;
    }

    setPoints(points){
        this.points = points;
    }

    takeDamage(){
        this.lives--;
    }

    shoot(){
        return new projectile(x,y,1);
    }
}

export default player;