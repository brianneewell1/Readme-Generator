//Global Variables
//Import inquirer and node modules
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { promisify } = require('util');

//Import questions.js 
const questions = require('./lib/questions')

// Import template.js
const template = require('./lib/template')

// Wrap fs.writeFile inside util.promisify
const writeFile = promisify(writeFile);

// First Message
console.log('This is a Github README generator');

//Function for user questions
function userQ() {
	return prompt(questions);
}

