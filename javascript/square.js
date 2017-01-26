class Square{
  constructor(x, y){
    this.x = x
    this.y = y
  }

  render(){
    return `<div id="${this.x}_${this.y}" class="square" ></div>`
  }
}
