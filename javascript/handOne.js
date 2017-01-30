class HandOne{
  constructor(){
    this.hand = $('div.hand')
    this.handTiles = []
    this.tiles = new Tile()
    this.score = 0
  }

  render(){
    let missing = this.getHand()

    for(var i = 0; i < missing; i++){
      let x = $('div.one').append(`<div class="handSquare"><h5 class="align-middle">${this.handTiles[i][0]}</h5><p class="points">${this.handTiles[i][1]}</p></div>`)
    }

    $('#score_one').text(this.score)
  }

  getHand(){
    let missing = this.missing()

    for(var i = 0; i < missing; i++){
      this.draw()
    }

    return missing
  }

  draw(){
    this.handTiles.unshift(this.tiles.getTile())
  }

  missing(){
    return 7 - this.handTiles.length
  }
}
