const onePoint = 1
const twpPoint = 2
const threePoint = 3
const fourPoint = 4
const fivePoint = 5
const eightPoint = 8
const tenPoint = 10

  const a = {"letter": "a", "points": 1, "occerences": 9}
  const b = {"letter": "b", "points": 3, "occerences": 2}
  const c = {"letter": "c", "points": 3, "occerences": 2}
  const d = {"letter": "d", "points": 2, "occerences": 4}

  const e = {"letter": "e", "points": 1, "occerences": 12}
  const f = {"letter": "f", "points": 4, "occerences": 2}
  const g = {"letter": "g", "points": 2, "occerences": 3}

  const h = {"letter": "h", "points": 1, "occerences": 2}
  const i = {"letter": "i", "points": 4, "occerences": 9}
  const j = {"letter": "j", "points": 8, "occerences": 1}

  const k = {"letter": "k", "points": 5, "occerences": 1}
  const l = {"letter": "l", "points": 1, "occerences": 4}
  const m = {"letter": "m", "points": 3, "occerences": 2}

  const n = {"letter": "n", "points": 1, "occerences": 6}
  const o = {"letter": "o", "points": 1, "occerences": 8}
  const p = {"letter": "p", "points": 3, "occerences": 2}

  const q = {"letter": "q", "points": 10, "occerences": 1}
  const r = {"letter": "r", "points": 1, "occerences": 6}
  const s = {"letter": "s", "points": 1, "occerences": 4}

  const t = {"letter": "t", "points": 1, "occerences": 6}
  const u = {"letter": "u", "points": 1, "occerences": 4}
  const v = {"letter": "v", "points":4, "occerences": 2}

  const w = {"letter": "w", "points": 4, "occerences": 2}
  const x = {"letter": "x", "points": 8, "occerences": 1}
  const y = {"letter": "y", "points": 4, "occerences": 2}
  const z = {"letter": "z", "points": 10, "occerences": 1}
  const allLetters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

  

class Tile {
  constructor (){
    this.alphabet = this.buildTiles()
    this.allTiles = this.tileMaker()
  }

  buildTiles(){
    let tiles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z']

    return tiles
  }

  getTile(){
    let index = (Math.random() * this.alphabet.length) + 1
    return this.alphabet.splice(index, 1)
  }

  tileMaker(){
    var tileArray = []
    allLetters.forEach(function(item) {
      for(var i = 0; i < item.occerences; i++){
          tileArray.push([item.letter, item.points ])
        }
      }) 
      debugger
      return tileArray
  }

}
