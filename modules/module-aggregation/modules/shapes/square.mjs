class Square {
  constructor(ctx, listId, length, x, y, color) {
    this.ctx = ctx;
    this.listId = listId;
    this.length = length;
    this.x = x;
    this.y = y;
    this.color = color;
    this.name = 'square';
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.length, this.length);
  }

  reportArea() {
    let listItem = document.createElement('li');
    listItem.textContent = `${this.name} area is ${this.length * this.length}px squared.`

    let list = document.getElementById(this.listId);
    list.appendChild(listItem);
  }

  reportPerimeter() {
    let listItem = document.createElement('li');
    listItem.textContent = `${this.name} perimeter is ${this.length * 4}px.`

    let list = document.getElementById(this.listId);
    list.appendChild(listItem);
  }
}

export { Square };
