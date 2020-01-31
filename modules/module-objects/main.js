import * as Canvas from './modules/canvas.js';

import * as Square from './modules/square.js';
import * as Circle from './modules/circle.js';
import * as Triangle from './modules/triangle.js';

// create the canvas and reporting list
let myCanvas = Canvas.create('myCanvas', document.body, 480, 320);
let reportList = Canvas.createReportList(myCanvas.id);

// draw a square
let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'blue');
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);

// draw a circle
let circle1 = Circle.draw(myCanvas.ctx, 75, 200, 100, 'green');
Circle.reportArea(circle1.radius, reportList);
Circle.reportPerimeter(circle1.radius, reportList);

// draw a triangle
let triangle1 = Triangle.draw(myCanvas.ctx, 100, 75, 190, 'yellow');
Triangle.reportArea(triangle1.length, reportList);
Triangle.reportPerimeter(triangle1.length, reportList);
