export default class Input {

  constructor (player) {

    document.addEventListener("keydown", event => {
      console.log('speed:', player.speed)
      switch (event.keyCode) {
        case 37:
          player.move('x', 'l');
          break

        case 39:
          player.move('x', 'r');
          break

        case 32:
          player.shoot();
          break
      }
    })


    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (player.speed.x < 0) {
            player.stop()
          }
          break;

        case 39:
          if (player.speed.x > 0) {
            player.stop()
          }
          break;
      }      
    })
  }
}
