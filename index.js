//Global Variables
//Import inquirer and node modules
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require("axios");


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
		// License
		type: 'list',
		name: 'license',
		message: 'Please select a license for your project.',
		choices: ["MIT", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3", "APACHE 2.0", "Mozilla Public 2.0"]
	},
	])
	.then(function(response) {
	//console.log(response);
	axios.get(`https://api.github.com/users/${response.projectName}`)
		 .then(function (data) {
			const readmeMD = `
				${response.email}
				${response.description}
				${response.license}
			 `;

			fs.writeFile("README.md", readmeMD, (err) => {
				if(err) {
					console.log(err);
				}else {
					console.log("Your ReadMe.md has been successfully created!")
				}
			 });
		 });
})
