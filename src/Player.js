import { Bullet } from './Bullet'

export class Player {
  constructor (game, color) {
    this.game = game
    this.health = 100
    this.dimensions = {
      width: 60,
      height: 20
    }
    this.position = {
      x: game.gameWidth / 2 - this.dimensions.width / 2,
      y: game.gameHeight - this.dimensions.height - 10
    };
    this.speed = {
      x: 0,
      y: 0
    }
    this.color = color
    this.maxSpeed = 8
    this.bullets = []
  }

  shoot () {
    console.log(this.position.x)
    let bulletPosition = {
      x: this.position.x + this.dimensions.width / 2,
      y: this.position.y - this.dimensions.height / 2
    }
    this.bullets.push(new Bullet(bulletPosition, this.color))
  }

  update (delta, context) {
    this.position.x += this.speed.x
    this.position.y += this.speed.y
    this.draw(context)
    this.bullets.forEach(bullet => {
      bullet.update(delta, context)
    })
  }

  _getBullets () {
    return this.bullets;
  }

  draw (context) {
    context.fillStyle = this.color
    context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
  }

  move (direction, way) {
    if (way === 'r' || way === 't') {
      this.speed[direction] = this.maxSpeed
    } else {
      this.speed[direction] = -this.maxSpeed
    }
  }

  stop () {
    this.speed.x = 0
    this.speed.y = 0
  }
  
}
