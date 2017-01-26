const row = 15 //Represents x-axis
const col = 15 //Represents y-axis

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
}
