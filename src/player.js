import Projectile from "./Projectile.js";
import Collisionable from "../Collisionable.js";

class Player extends Collisionable{
    constructor(x,y,width,height, keymap = {"a": false, "d": false, "w": false, "s": false}){
        super(x,y,width,height);
        this.lives = 3;
        this.points = 0;
        this.keymap = keymap;
    }

    move(dx,dy){
        this.x += dx;
        this.y += dy;
    }

    moveTo(x,y){
        this.x = x;
        this.y = y;
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
        return new Projectile(x,y,1);
    }

    getSprite(){
        return "ship"
    }
}

export default Player;