import { create, createReportList } from './modules/canvas.js';

import { name as squareName,
         draw as drawSquare,
         reportArea as reportSquareArea,
         reportPerimeter as reportSquarePerimeter } from './modules/square.js';

import { name as circleName,
         draw as drawCircle,
         reportArea as reportCircleArea,
         reportPerimeter as reportCirclePerimeter } from './modules/circle.js';

import { name as triangleName,
        draw as drawTriangle,
        reportArea as reportTriangleArea,
        reportPerimeter as reportTrianglePerimeter } from './modules/triangle.js';

// create the canvas and reporting list
let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

// draw a square
let square1 = drawSquare(myCanvas.ctx, 50, 50, 100, 'blue');
reportSquareArea(square1.length, reportList);
reportSquarePerimeter(square1.length, reportList);

// draw a circle
let circle1 = drawCircle(myCanvas.ctx, 75, 200, 100, 'green');
reportCircleArea(circle1.radius, reportList);
reportCirclePerimeter(circle1.radius, reportList);

// draw a triangle
let triangle1 = drawTriangle(myCanvas.ctx, 100, 75, 190, 'yellow');
reportTriangleArea(triangle1.length, reportList);
reportTrianglePerimeter(triangle1.length, reportList);
