const onePoint = 1
const twpPoint = 2
const threePoint = 3
const fourPoint = 4
const fivePoint = 5
const eightPoint = 8
const tenPoint = 10

class Tile {
  constructor (){
    this.alphabet = this.buildTiles()
  }

  buildTiles(){
    let tiles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z']

    return tiles
  }

  getTile(){
    let index = (Math.random() * this.alphabet.length) + 1
    return this.alphabet.splice(index, 1)
  }
}
