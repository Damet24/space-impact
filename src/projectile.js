class projectile {
    constructor(x,y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction
    }

    move(){
        this.x += 1*direction;
    }

}

export default projectile;