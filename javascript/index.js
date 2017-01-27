$(render())

function render(){
  let game = new Scrabble()
  game.render()
  // game.centerRed()
  game.onFinishTurn()
  game.onCancelMove()
}
