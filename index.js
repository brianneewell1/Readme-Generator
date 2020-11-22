//Global Variables
//Import inquirer and node modules
const inquirer = require('inquirer');
const fs = require('fs');

//Import questions.js 
const questions = require('./lib/questions')

// Import template.js
const template = require('./lib/template')

// First Message
console.log('This is a Github README generator');

//Function for user questions
function userQ() {
	return prompt(questions);
}

// Use async
async function init() {
  //try
	try {
    const answers = await userQ();
    
    console.log(JSON.stringify(answers, null, '\t'));

		const readme = template(answers);

    await writeFile('README.md', readme);

		console.log('README.md is complete!');
	} catch (err) {
		console.log(err);
	}
}

init();
