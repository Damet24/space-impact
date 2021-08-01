import Render from "./Render.js";
import Player from "./Player.js";
import Projectile from "./Projectile.js";

class Game {
    constructor(canvas) {
        this.render = new Render(canvas);
        this.gameElements = [];
        this.players = []
        this.keymap = {};
    }

    start() {
        this.setGame();
        this.render.loadLevelAssets();
    }

    setGame() {
        this.addPlayer();
        this.gameElements.push(new Projectile(0,0,1))
    }

    getAllElements() {
        let elements = [];
        for (let element of this.gameElements) {
            elements.push([element.getSprite(), element.x, element.y]);
        }
        for (let element of this.players) {
            elements.push([element.getSprite(), element.x, element.y]);
        }
        return elements;
    }

    movePlayers() {
        for (let player of this.players) {
            let isNegative = -1;
            let counter = 0;
            let dx = 0, dy = 0;
            for (let key in player.keymap) {
                console.log(key)
                if (counter > 1) {
                    dy += 5 * this.keymap[key] * isNegative;
                } else {
                    dx += 5 * this.keymap[key] * isNegative;
                }
                counter++;
                isNegative *= -1;
            }
            player.move(dx,dy);
        }
        console.log(this.players[0]);
    }

    checkPlayerActions(){
        this.movePlayers();
    }

    checkCollision() {
        for (let player of this.players) {
            for (let element of this.gameElements) {
                if (player.inCollision(element)) {
                    kill(player);
                }
            }
        }
    }

    updateFrame() {
        this.checkCollision();
        for (let element of this.gameElements) {
            element.move();
        }
        this.checkPlayerActions();
        this.render.paintFrame(this.getAllElements());
    }

    kill(player) {
        player.takeDamage();
        reset(player);
    }

    reset(player) {
        player.moveTo(0, 0);
    }

    addPlayer() {
        let player = new Player(0, 0, 36, 28);
        for (let key in player.keymap) {
            this.keymap[key] = 0;
        }
        let newPlayer = new Player(0, 0, 36, 28);
        this.players.push(newPlayer);
    }

    addEnemy() {
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("main_canvas");
    const game = new Game(canvas);

    document.addEventListener('keydown', (event) => {
        game.keymap[event.key] = 1;
    });

    document.addEventListener('keyup', (event) => {
        game.keymap[event.key] = 0;
    });

    game.start();

    function gameLoop(){
        game.updateFrame();
    }

    setInterval(gameLoop,100);
})

export default Game;