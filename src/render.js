class Render{
    constructor(canvas){
        canvas.width = 1920;
        canvas.height = 1080; 
        canvas.style.background = '#FFAC9E';
        this.width = 1920;
        this.height = 1080;
        this.ctx = canvas.getContext("2d");
        this.sources = {};
    }

    paintFrame(renderList){
        this.ctx.clearRect(0,0,this.width,this.height);
        for(let element of renderList){
            this.ctx.drawImage(this.sources[element[0]],element[1],element[2]);
        }
    }

    loadLevelAssets(dir=""){
        this.sources['ship'] = new Image();
        this.sources['ship'].src = '../assets/ship.png';
        this.sources['ship'].loaded = false;
        this.sources['ship'].onload = this.changeLoadStateForImage(this.sources['ship']);
        this.sources['bullet'] = new Image();
        this.sources['bullet'].src = '../assets/bullet.png';
        this.sources['bullet'].loaded = false;
    }

    changeLoadStateForImage(img){
        img.loaded = true;
    }
}

export default Render;


