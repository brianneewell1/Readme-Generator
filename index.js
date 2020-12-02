//Global Variables
//Import inquirer and node modules
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require("axios");


inquirer.prompt([
	{
		//Project Name
		type: 'input',
		name: 'projectName',
		message: 'What is the name of the project?',
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
		//Github Username
		type: 'input',
		name: 'gitHubUsername',
		message: 'Enter your github username',
	},
	{
		// Get images or URL
		type: 'input',
		name: 'imageURL',
		message: 'Enter the image paths or url for your screenshot or demo. (* Use comma "," to separate each path or url)',
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
	.then(function (response) {
		//console.log(response);
		axios.get(`https://api.github.com/users/${response.projectName}`)
			.then(function (data) {
				const readmeMD = `
# ${response.projectName}
## Table of Contents
	* [User Story](#userStory)
	* [Description](#description)
	* [Technologies](#technologies)
	* [Contact](#contact)
## User Story
	${response.userStory}
## Description
	${response.description}
## Technologies
	${response.technologies}
## Demo
	${response.imageURL}
## Contact
	Email: [${response.email}]
	GitHub Profile: [${response.gitHubUsername}]
## License
	[![License](${response.license})]			
			 `;
				fs.writeFile("README.md", readmeMD, (err) => {
					if (err) {
						console.log(err);
					} else {
						console.log("Your ReadMe.md has been successfully created!")
					}
				});
			});
	})
