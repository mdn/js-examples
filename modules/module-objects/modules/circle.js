const name = 'circle';

function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

function draw(ctx, radius, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, degToRad(0), degToRad(360), false);
  ctx.fill();

  return {
    radius: radius,
    x: x,
    y: y,
    color: color
  };
}

function reportArea(radius, listId) {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} area is ${Math.round(Math.PI * (radius * radius))}px squared.`

  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

function reportPerimeter(radius, listId) {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} circumference is ${Math.round(2 * Math.PI * radius)}px.`

  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

export { name, draw, reportArea, reportPerimeter };
