const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function setShape(response) {
    const shapeClass = {
        Circle,
        Square,
        Triangle,
    }[response.shape];

    if (shapeClass) {
        const userShape = new shapeClass(response.shapeColor, response.text, response.textColor);
        return userShape.render();
    }

    console.error('Unknown shape:', response.shape);
    return ''; 
}

module.exports = setShape;

