class Square{
  constructor(tempRow, tempCol){
    this.tempRow = tempRow
    this.tempCol = tempCol
  }

  render(){
    return `<div id="${this.tempRow}_${this.tempCol}" class="square" ></div>`
  }
}
