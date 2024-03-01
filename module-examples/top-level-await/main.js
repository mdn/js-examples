import { Canvas } from './modules/canvas.js';
import colors from './modules/getColors.js';
 // top level await
let squareModule = await import('./modules/square.js');
let circleModule = await import('./modules/circle.js');
let triangleModule = await import('./modules/triangle.js');

let circleBtn = document.querySelector('.circle');
let squareBtn = document.querySelector('.square');
let triangleBtn = document.querySelector('.triangle');

// create the canvas and reporting list
let myCanvas = new Canvas('myCanvas', document.body, 480, 320);
myCanvas.create();
myCanvas.createReportList();

// draw a square
squareBtn.addEventListener('click',() => {
    let square = new squareModule.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, colors.blue);
    square.draw();
    square.reportArea();
    square.reportPerimeter();
});

// draw a circle
circleBtn.addEventListener('click',  () => {
    let circle = new circleModule.Circle(myCanvas.ctx, myCanvas.listId, 75, 200, 100, colors.green);
    circle.draw();
    circle.reportArea();
    circle.reportPerimeter();
});

// draw a triangle
triangleBtn.addEventListener('click',  () => {
    let triangle = new triangleModule.Triangle(myCanvas.ctx, myCanvas.listId, 100, 75, 190, colors.yellow);
    triangle.draw();
    triangle.reportArea();
    triangle.reportPerimeter();
});
