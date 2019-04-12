import { Game } from './src/Game'
const canvas = document.getElementById("canvas")

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

let game = new Game(canvas, GAME_WIDTH, GAME_HEIGHT)
game.start()

window.game = game

let gameTimestamp = null;

function step (timestamp) {
  if (!gameTimestamp) {
    gameTimestamp = timestamp
  }
  game.update()
  window.requestAnimationFrame(step)
}

step(gameTimestamp)
