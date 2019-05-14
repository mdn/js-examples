const name = 'square';

function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

function reportArea(length, listId) {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} area is ${length * length}px squared.`

  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

function reportPerimeter(length, listId) {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} perimeter is ${length * 4}px.`

  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

export { name, draw, reportArea, reportPerimeter };
