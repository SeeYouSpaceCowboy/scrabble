var tile = []
var boardStack = []
var handStack = []
var toggle = true

class Scrabble {
  constructor(){
    this.board = new Board()
    this.playerOne = new HandOne()
    this.playerTwo = new HandTwo()
  }

  render(){
    this.board.render(this.addSquareClick.bind(this))
    this.playerOne.render()//this.addHandSquareClick.bind(this))
    this.addHandOneSquareClick()

    this.playerTwo.render()
    this.addHandTwoSquareClick()

    $(`${this.board.boardGrid[8][8].id}`).css('background-color', '#f39c12')
  }

  addSquareClick(){
    $('.square').click((event) => {
      let $targetTile = $(event.target)
      if(tile.length != 0 && ($targetTile.text() === null  || $targetTile.text() === "") ){
        $targetTile.css('background-color', '#f39c12')
        $targetTile.append(`<h5>${tile[0]}</h5>`)
        boardStack.push([tile[0], event.target.id, tile[1]])
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
            handStack.push([tile[0], this.id])
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
            handStack.push([tile[0], this.id])
          }

          $targetTile.remove()
          $targetTile.text("")
        }
      }
    })
  }

  onFinishTurn(){
    $('.finish').click((event) => {
      var check = this.wordCheck().then(function(response) {
        
        // if check passes, continue with adding points etc
      }).catch(function(e) {
        console.log('we hit an error')
        debugger
        // if check fails, reject word, return tiles and lose turn
      })
      // if(check === "yes"){
        let player = null
        if(toggle){
          player = this.playerOne
        } else {
          player = this.playerTwo
        }

        let boardStackScoreSum = 0
        for(var i = 0; i < boardStack.length; i++){
          for(var j = 0; j < player.handTiles.length; j++){
            if(player.handTiles[j][0] === boardStack[i][0]){
              player.handTiles.splice(j, 1)
              break
            }
          }

          boardStackScoreSum += boardStack[i][2]
        }

        if(toggle){
          this.playerOne.score += boardStackScoreSum
          this.playerOne.render()
          $('#turn').text("Player Two =>")
        } else {
          this.playerTwo.score += boardStackScoreSum
          this.playerTwo.render()
          $('#turn').text("<= Player One")
        }
      // } else {
      //   alert('Not a word. Turn lost')
      // }
        handStack = []
        boardStack = []
        toggle = !toggle
      })
  }

  onCancelMove(){
    $('.cancel').click((event) => {
      if(handStack != []){
        for(var i = 0; i < handStack.length; i++){
          if(toggle){
            $('div.one').append(`<div class="handSquare"><h4 class="align-middle">${handStack[i][0]}</h2></div>`)
          } else {
            $('div.two').append(`<div class="handSquare"><h4 class="align-middle">${handStack[i][0]}</h2></div>`)
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
    })
  }

  wordCheck(){
  
    let word = ""
    boardStack.forEach(function(letter){
      word += letter[0]
    })
  
    const wordsApiKey = "KxF7oR4hJcmshCTBdIaVTX9odfuzp1FvzfajsnXUxQ9zwn9vgX"
    const URL = "https://wordsapiv1.p.mashape.com/words/"

    var wordFeedback = "cat"
    return $.ajax({
          url: `${URL}${word}`,
           headers: {'X-Mashape-Key': wordsApiKey}
       
        })

  }
}

