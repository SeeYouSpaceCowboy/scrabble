var tile = ""
var boardStack = []
var handStack = []

class Scrabble {
  constructor(){
    this.board = new Board()
    this.handOne = new Hand()
  }

  render(){
    this.board.render(this.addSquareClick.bind(this))
    this.handOne.render(this.addHandSquareClick.bind(this))
  }

  addSquareClick(){
    $('.square').click((event) => {
      let $targetTile = $(event.target)
      if(tile != null && tile != "" && ($targetTile.text() === null  || $targetTile.text() === "") ){
        $targetTile.css('background-color', '#f39c12')
        $targetTile.append(`<h5>${tile}</h5>`)
        boardStack.push([tile, event.target.id])
        tile = ""
      }
    })
  }

  addHandSquareClick(){
    $('.handSquare').click((event) => {
      let $targetTile = $(event.target)
      if(tile === "" && $targetTile.text() != ""){
        tile = $targetTile.text()

        if(tile != ""){
          handStack.push([tile, event.target.id])
        }

        $targetTile.text("")
      }
    })
  }

  onFinishTurn(){
    $('.finish').click((event) => {
      debugger
      tileStack = []
    })
  }

  onCancelMove(){
    $('.cancel').click((event) => {
      if(handStack != []){
        for(var i = 0; i < handStack.length; i++){
          $(`#${handStack[i][1]}`).text(handStack[i][0])
        }

        handStack = []
      }

      if(boardStack != []){
        for(var i = 0; i < boardStack.length; i++){
          let id = boardStack[i][1]
          $(`#${id}`).text("")
          $(`#${id}`).css('background-color', '#EAE2CF')
        }

        boardStack = []
      }
    })
  }
}
