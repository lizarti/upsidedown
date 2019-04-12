export class Bullet {

  constructor (position, color) {
    this.position = position
    this.speed = {
      x: 0,
      y: 50
    }
    this.color = color
  }

  update (delta, context) {
    this.position.x = parseInt(this.position.x + (this.speed.x / 60))
    this.position.y = parseInt(this.position.y - (this.speed.y / 60))
    this.draw(context)
  }

  draw (context) {
    context.rect(this.position.x - 4, this.position.y, 8, 8)
    context.fillStyle = this.color
    context.fill()
  }
}
