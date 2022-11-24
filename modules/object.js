import {c, ctx} from "./canvas.js";

class Object {

    constructor(x,y){
        this.x = x
        this.y = y

        this.width = ""
        this.height = ""

        this.frameX = ""
        this.frameY = ""

        this.spriteSheet = new Image()
        this.spriteSheet.src = ""
    }

    update(){

    }

    draw(){
        c.getContext('2d').drawImage(
            this.spriteSheet,
            this.frameX,
            this.frameY,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

window.addEventListener("keydown", function(event) {
    switch(event.key){
        case "ArrowLeft":
            break
        case "ArrowRight":
            break
    }
});

window.addEventListener("keyup", function(event) {
    switch(event.key){
        case "ArrowLeft":
            break
        case "ArrowRight":
            break
    }
});

export {Object};
