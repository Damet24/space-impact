class Projectile {
    constructor(x,y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction
    }

    move(){
        this.x += 10*this.direction;
    }

    getSprite(){
        return "bullet"
    }

}

export default Projectile;