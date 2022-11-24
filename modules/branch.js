import {c, ctx} from "./canvas.js";

class Branch {

    constructor(x,y,angle,width,height){
        this.x = x
        this.y = y

        this.width = width
        this.height = height

        this.angle = angle

        this.newPos = ""
    }

    update(){
        this.newPos = {x: this.x + this.height * Math.cos(Math.PI * this.angle / 180.0),y: this.y + this.height * Math.sin(Math.PI * this.angle / 180.0)}
    }

    draw(){
        ctx.moveTo(this.x, this.y);
        ctx.lineWidth = 1;
        ctx.lineTo(this.newPos.x,this.newPos.y);
        //ctx.lineTo(10,10);
        ctx.stroke();
    }
}

export {Branch};
