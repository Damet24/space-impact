class projectile {
    constructor(x,y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction
    }

    move(){
        this.x += 1*this.direction;
    }

}

export default projectile;