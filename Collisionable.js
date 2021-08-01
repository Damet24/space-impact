class Collisionable {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    inCollision(obj){
        return this.isInCollision(obj);
    }

    isInCollision(obj){
        return this.x < obj.x + obj.width && this.x + this.width > obj.x && 
            this.y < obj.y + obj.height && this.height + this.y > obj.y;
    }

}

export default Collisionable;