import { Player } from './Player'
import Uuid from './utils/Uuid'
import Input from './Input';

export class Game {
  
  constructor (canvas, gameWidth, gameHeight) {
    this.id = Uuid.generate()
    this.canvas = canvas
    this.context = canvas.getContext("2d")
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  start () {
    this.players = ['#21ed43', '#1936d8'].map(color => new Player(this, color))
    this.players.forEach(player => new Input(player))
  }

  update (delta) {
    this.context.clearRect(0, 0, this.gameWidth, this.gameHeight)
    // this._createWorld()
    this.players.forEach(player => player.update(delta, this.context))
  }

  _createWorld () {
    let gradient = this.context.createRadialGradient(this.gameWidth / 2, this.gameHeight / 2, 0, this.gameWidth / 2, this.gameHeight / 2, 500)
		gradient.addColorStop(0,'rgba(0, 70, 70, 1)')
		gradient.addColorStop(1,'rgba(0, 8, 14, 1)')

		this.context.fillStyle = gradient;
		this.context.fillRect( 0, 0, this.gameWidth, this.gameHeight );
  }

  _getBullets () {
    let bullets = []
    for (let i = 0; i < this.players.length; i++) {
      bullets.push(...this.players[i]._getBullets())
    }
  }

}
