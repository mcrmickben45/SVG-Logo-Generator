const inquirer = require('inquirer');
const fs = require('fs').promises;  
const questions = require('./lib/userQuestions.js');
const chooseShape = require('./lib/chooseShape.js');

const fileName = './examples/logo.svg'; 

async function createLogo(response) {
    const svg = chooseShape(response);
    try {
        await fs.writeFile(fileName, svg);
        console.log('Generated logo.svg');
    } catch (err) {
        console.error('Error writing logo.svg:', err);
    }
}

async function init() {
    try {
        const response = await inquirer.prompt(questions);
        await createLogo(response);
    } catch (err) {
        console.error('Error during initialization:', err);
    }
}

init();
