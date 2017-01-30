var tile = []
var boardStack = []
var handStack = []
var wordStack = []
var toggle = true

class Scrabble {
  constructor(){
    this.board = new Board()
    this.playerOne = new HandOne()
    this.playerTwo = new HandTwo()
  }

  render(){
    this.board.render(this.addBoardSquareClick.bind(this))
    this.playerOne.render()//this.addHandSquareClick.bind(this))
    this.addHandOneSquareClick()

    this.playerTwo.render()
    this.addHandTwoSquareClick()

    $(`${this.board.boardGrid[8][8].id}`).css('background-color', '#f39c12')
  }

  addBoardSquareClick(){
    $('.square').click((event) => {
      let $targetTile = $(event.target)
      if(tile.length != 0 && ($targetTile.text() === null  || $targetTile.text() === "") ){
        $targetTile.css('background-color', '#f39c12')
        $targetTile.append(`<h5>${tile[0]}</h5>`)
        boardStack.push([tile[0], event.target.id, tile[1]])
        wordStack.push([tile[0], tile[1]])
        debugger
        let array = this.board.getAdjacentSqaureDirection(event.target.id)
        if(array){
          array.forEach((element, idx, array) => wordStack.push(element) )
        }
        console.log(array)
        tile = []
      }
    })
  }

  addHandOneSquareClick(){
    $('div.one').on('click', 'div.handSquare', function(event){
      if(toggle){
        let $targetTile = $(this)
        if(tile.length === 0 && $targetTile.text() != ""){
          tile.push($targetTile.children('h5').text())
          tile.push(parseInt($targetTile.find('.points').text()))

          if(tile.length != 0){
            handStack.push([tile[0], this.id, tile[1]])
            debugger
          }

          $targetTile.remove()
          $targetTile.text("")
        }
      }
    })
  }

  addHandTwoSquareClick(){
    $('div.two').on('click', 'div.handSquare', function(event){
      if(!toggle){
        let $targetTile = $(this)
        if(tile.length === 0 && $targetTile.text() != ""){
          tile.push($targetTile.children('h5').text())
          tile.push(parseInt($targetTile.find('.points').text()))

          if(tile.length != 0){
            handStack.push([tile[0], this.id, tile[1]])
          }

          $targetTile.remove()
          $targetTile.text("")
        }
      }
    })
  }

  onFinishTurn(){
    let wordStackScoreSum = 0

    $('.finish').click((event) => {
      this.wordCheck().then((response) => {
        let player = null
        if(toggle){
          player = this.playerOne
        } else {
          player = this.playerTwo
        }

        for(var i = 0; i < boardStack.length; i++){
          for(var j = 0; j < player.handTiles.length; j++){
            if(player.handTiles[j][0] === boardStack[i][0]){
              player.handTiles.splice(j, 1)
              break
            }
          }
        }

        for(var i = 0; i < wordStack.length; i++){
          wordStackScoreSum += wordStack[i][1]
        }

        if(toggle){
          this.playerOne.score += wordStackScoreSum
        } else {
          this.playerTwo.score += wordStackScoreSum
        }
        wordStackScoreSum = 0

        toggleTurn.call(this)
          // if check fails
        }).catch((e) => {
          alertWord()
          this.undoMove()
          toggleTurn.call(this)
          // if check fails, reject word, return tiles and lose turn
        })
      })

      function alertWord(){
        let word = ""
        for(var i = 0; i < wordStack.length; i++){
          word += wordStack[i][0]
          debugger
        }
        alert(`Bad Bad Word: ${word}. Turn Lost.`)
      }

      function toggleTurn(){
        if(toggle){
          this.playerOne.render()
          $('#turn').text("Player Two =>")
        } else {
          this.playerTwo.render()
          $('#turn').text("<= Player One")
        }

        handStack   = []
        boardStack  = []
        wordStack   = []
        tile        = []
        toggle      = !toggle
      }
  }

  onCancelMove(){
    $('.cancel').click( this.undoMove.bind(this) )
  }

  undoMove(){
    if(handStack != []){
      for(var i = 0; i < handStack.length; i++){
        if(toggle){
          $('div.one').append(`<div class="handSquare"><h5 class="align-middle">${handStack[i][0]}</h5><p class="points">${handStack[i][2]}</p></div>`)
          debugger
        } else {
          $('div.two').append(`<div class="handSquare"><h5 class="align-middle">${handStack[i][0]}</h5><p class="points">${handStack[i][2]}</p></div>`)
        }
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

    wordStack = []
    tile = []
  }

  wordCheck(){
    let word = ""
    wordStack.forEach(function(letter){
      word += letter[0]
    })

    const wordsApiKey = "KxF7oR4hJcmshCTBdIaVTX9odfuzp1FvzfajsnXUxQ9zwn9vgX"
    const URL = "https://wordsapiv1.p.mashape.com/words/"

    var wordFeedback = "cat"
    return $.ajax({
      url: `${URL}${word}`,
      headers: {'X-Mashape-Key': wordsApiKey},

      success : function(data, textStatus, XMLHttpRequest){
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
      }
    })
  }
}
