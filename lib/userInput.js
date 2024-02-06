const inquirer = require('inquirer');

function getUserInput() {
  return new Promise((resolve) => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters for the text:',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter text color (keyword or hexadecimal):',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape:',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter shape color (keyword or hexadecimal):',
        },
      ])
      .then((userInput) => resolve(userInput));
  });
}

module.exports = { getUserInput };
