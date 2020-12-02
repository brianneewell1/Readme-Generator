//Global Variables
//Import inquirer and node modules
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require("axios");
//const createFile = require('markdown-generator');

// Get the current year
let year = new Date().getFullYear();

inquirer.prompt([
	{
		//Author
		type: 'input',
		name: 'projectName',
		message: 'What is the nameof the project?',
	},
	{
		//Email
		type: 'input',
		name: 'email',
		message: 'Provide a valid email address',
	},
	{
		//Description
		type: 'input',
		name: 'description',
		message: 'Enter a description of your app',
	},
	{
		//Installation Instructions
		type: 'input',
		name: 'install',
		message: 'Enter installation instructions',
	},
	{
		//Github Username
		type: 'input',
		name: 'gitHubusername',
		message: 'Enter your github username',
	},
	{
		//Repo name
		type: 'input',
		name: 'repoName',
		message: 'Enter the name for your Github Repository',

	},
	{
		// Get additional project links
		type: 'input',
		name: 'projectLink',
		message: 'Enter the entire link of your project, including the http(s):. (* Use comma "," to seperate each link)',

	},
	{
		//Project Title
		type: 'input',
		name: 'title',
		message: 'Enter your project title',
	},
	{
		//Screenshots and Demo
		type: 'confirm',
		name: 'screenshots',
		message: 'Would you like to add screenshots or a demo to your README?',
		default: false,
	},
	{
		// Get images or URL
		type: 'input',
		name: 'imageURL',
		message: 'Enter the image paths or url for your screenshot or demo. (* Use comma "," to separate each path or url)',
	},
	{
		//Project objective
		type: 'input',
		name: 'objective',
		message: 'What is your project objective?',
	},
	{
		// Project user-story
		type: 'input',
		name: 'userStory',
		message: 'Provide the User Story for your project',
	},
	{
		//Technologies used
		type: 'input',
		name: 'technologies',
		message: 'List the technologies used in your project. (* Use comma "," to separate each technology)',
	},
	{
		// Tests
		type: 'input',
		name: 'test',
		message: 'How can your project be tested?',
		default: 'npm test'
	},
	{
		// License
		type: 'list',
		name: 'license',
		message: 'Please select a license for your project.',
		choices: ["MIT", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3", "APACHE 2.0", "Mozilla Public 2.0"]
	},
])
.then(function(response) {
	console.log(response);
})
	
//Take questions and write the readme
const parseData =
`# ${response.title}
[![License](${license})]
## Description
${response.description}
## Table of Contents

* [Installation](#install)
* [License](#license)
* [Contact](#contact)

##Installation
${response.installation}
##Tests
${response.test}
##License
${response.license}
##Contact
The full project can be found on github using the links below. 
Github Profile: [${response.username}](${response.username})
Repository: [${response.repo}](${response.repo})
`