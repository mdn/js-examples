function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

class Triangle {
  constructor(ctx, listId, length, x, y, color) {
    this.ctx = ctx;
    this.listId = listId;
    this.length = length;
    this.x = x;
    this.y = y;
    this.color = color;
    this.name = 'triangle';
  }

  draw() {
    this.ctx.fillStyle = this.color;

    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.length, this.y);
    let triHeight = (this.length/2) * Math.tan(degToRad(60));
    this.ctx.lineTo(this.x + (this.length/2), this.y + triHeight);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.fill();
  }

  reportArea() {
    let listItem = document.createElement('li');
    listItem.textContent = `${this.name} area is ${Math.round((Math.sqrt(3)/4)*(this.length * this.length))}px squared.`

    let list = document.getElementById(this.listId);
    list.appendChild(listItem);
  }

  reportPerimeter() {
    let listItem = document.createElement('li');
    listItem.textContent = `${this.name} perimeter is ${this.length * 3}px.`

    let list = document.getElementById(this.listId);
    list.appendChild(listItem);
  }
}

export { Triangle };
