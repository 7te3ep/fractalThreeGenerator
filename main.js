//===================================
// _____|IMPORT MODULE FILES| _____// 
//===================================

let canvas = document.getElementById('canvas')

import {c, ctx} from "./modules/canvas.js";
import {random} from "./tools/random.js";
let curve = 15
let curve1 = 15

let baseMinLenBranch = 10
let baseWidthBranch = 40
let baseAngle = 0
let taille = 250
let color1 = "brown"
let color2 = "green"


function drawTree(startX,startY,len,angle,branchWidth,color1,color2){

    ctx.beginPath()
    ctx.save()
    ctx.strokeStyle = color1
    ctx.fillStyle = color2
    ctx.lineWidth = branchWidth
    ctx.translate(startX,startY)
    ctx.rotate(angle*Math.PI/180)
    ctx.moveTo(0,0)
    ctx.lineTo(0,-len)
    ctx.stroke()

    if (len < baseMinLenBranch){
        ctx.beginPath()
        ctx.arc(0,-len,10,0,Math.PI/2)
        ctx.fill()
        ctx.restore()
        return
    }

    //curve = random(10,20)
        drawTree(0,-len,len * 0.73, angle+curve, branchWidth*0.65)
        drawTree(0,-len,len * 0.73, angle-curve1, branchWidth*0.65)

    ctx.restore()

}


let gameFrame = 40
let goRight = true
let gameloop = setInterval(function(){
    //CLEAR 
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // HANDLE AND DRAW ALL
    if (gameFrame % 90 == 0){
        if (goRight){
            goRight = false
        }else {
            goRight = true
        }
    }
    if (goRight){
        curve += 0.02
        curve1 -= 0.02
    }else {
        curve -= 0.02
        curve1 += 0.02
    }
    //if (gameFrame*5<taille){
    //    drawTree(500,1050,gameFrame,baseAngle,baseWidthBranch,color1,color2)
    //}else {
        drawTree(window.innerWidth/2,1050,taille,baseAngle,baseWidthBranch,color1,color2)
    //}

    
    // UPDATE 
    gameFrame ++

    // END IF

},32) 

document.addEventListener('click', event => {
    gameFrame = 0
    baseMinLenBranch = random(8,14)
    baseWidthBranch = random(20,70)
    baseAngle = random(-5,5)
    taille = random(250,canvas.height/3)
    color1 = 'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')'
    color2 = 'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')'
    curve = random(5,50)
    curve1 = random(5,50)
})