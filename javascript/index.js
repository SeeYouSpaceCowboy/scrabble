$(render())

function render(){
  let game = new Scrabble()
  game.render()
  game.onFinishTurn()
  game.onCancelMove()
}
