const fs = require('fs');
const { getUserInput } = require('./lib/userInput');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
  const userInput = await getUserInput();

  let shape;
  switch (userInput.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      throw new Error('Invalid shape choice');
  }

  shape.setColor(userInput.shapeColor);

  const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;

  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

generateLogo();
