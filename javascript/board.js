const row = 15
const col = 15

class Board{
  constructor(){
    this.board = $('div.board')
    this.boardGrid = this.buildBoardGrid(row, col)
  }

  render(callback){
    for(var x = 0; x < row; x++){
      for(var y = 0; y < col; y++){
        this.board.append(this.boardGrid[x][y])
      }
    }

    $("#7_7").css('background-color', '#FF0000')
    callback()
  }

  buildBoardGrid(row, col){
    let square = null
    let boardArray = []

    for(var x = 0; x < row; x++){
        boardArray.push([])

        boardArray[x].push(new Array(col))

        for(var y = 0; y < col; y++){
          square = new Square(x, y)
          boardArray[x][y] = square.render()
        }
    }
    return boardArray
  }

  getAdjacentSqaureDirection(id){
    let x = parseInt(id.split('_')[0])
    let y = parseInt(id.split('_')[1])

    let $north = $(`#${x-1}_${y}`).text()
    let $south = $(`#${x+1}_${y}`).text()
    let $east = $(`#${x}_${y+1}`).text()
    let $west = $(`#${x}_${y-1}`).text()

    let first = true
    let cross = false

    let array = []
    let tile = new Tile()

    if($east != ""){
      var i = 1

      do {
        i++
        array.push([$east, tile.findValue($east)])
        $east = $(`#${x}_${y+i}`).text()
      } while($east != "")

    } else if ($south != ""){
      var i = 1

      do {
        i++
        array.push([$south, tile.findValue($south)])
        $south = $(`#${x+i}_${y}`).text()
      } while($south != "")

    } else if ($north != ""){

    }

    return array

    // if($north != ""){
    //   return $north
    // } else if($south != "") {
    //   return $south
    // } else if($east != "") {
    //   return $east
    // } else if($west != "") {
    //   return $west
    // } else {
    //   return false
    // }
  }
}
