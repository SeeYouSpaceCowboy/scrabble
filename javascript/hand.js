class Hand{
  constructor(){
    this.hand = $('div.hand')
    this.handTiles = []
    this.tiles = new Tile()
  }

  render(callback){
    this.getHand()

    for(var i = 0; i < 7; i++){
      $('div.hand').append(`<div class="handSquare"><h2 id="${i}" class="align-middle">${this.handTiles[i]}</h2></div>`)
    }

    callback()
  }

  getHand(){
    let missing = 7 - this.handTiles.length

    for(var i = 0; i < missing; i++){
      this.draw()
    }
  }

  draw(){
    this.handTiles.push(this.tiles.getTile())
  }

  spliceHand(){

  }
}
