import {update as updateSnake, draw as drawSnake ,Snake_Speed , getSnakeHead, snakeIntersection} from './snake.js'
import{update as updatefood , draw as drawfood} from './food.js'
import{outsideGrid} from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
 const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if(gameOver){
        if(confirm('you lost, press ok to restart')){
            window.location= 'snake.html'
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceLastRender < 1 / Snake_Speed) return

    lastRenderTime = currentTime
    update()
    draw()
}
window.requestAnimationFrame(main)

function update(){
 updateSnake()
 updatefood()
 cheakDeath()
}
function draw(){
    gameBoard.innerHTML =''
    drawSnake(gameBoard);
    drawfood(gameBoard)
}
function cheakDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}