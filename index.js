//Global Variables
//Import inquirer and node modules
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
		//Author
		type: 'input',
		message: 'Enter your first and last name',
		name: 'author',
			},
    {
		//Email
		type: 'input',
		message: 'Enter your email',
		name: 'email',
			},
	{
		//Github Username
		type: 'input',
		message: 'Enter your github username',
		name: 'username',
		},
	{
		//Repo name
		type: 'input',
		message: 'Enter the name for your Github Repository',
		name: 'repo',
		
	},
	{
		//Additional Links
		type: 'confirm',
		name: 'isLinks',
		message: 'Would you like to add additional project links?',
		default: false,
	},
	{
		// Get additional project links
		type: 'input',
		name: 'projectLinks',
		message: 'Enter the additional project link(s) using the entire link, including the http(s):. (* Use comma "," to seperate each link)',
		
	},
	{
		//Project Title
		type: 'input',
		message: 'Enter your project title',
		name: 'title',
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
		message: 'What is your project objective?',
		name: 'objective',
			},
	{
		// Project user-story
		type: 'input',
		message: 'Provide the User Story for your project',
		name: 'userStory',
			},
	{
		//Technologies used
		type: 'input',
		message: 'List the technologies used in your project. (* Use comma "," to separate each technology)',
		name: 'technologies',
			},
			{
		// Tests
		type: 'input',
		message: 'How can your project be tested?',
		name: 'test',
		default: 'npm test'
	},
	{
		// License
		type: 'list',
		message: 'Please select a license for your project.',
		name: 'license',
		choices: [
			{
				name: 'MIT',
				value: 'mit',
			},
			{
				name: 'GNU GPLv3',
				value: 'gpl-3.0',
			},
			{
				name: 'GNU AGPLv3',
				value: 'agpl-3.0',
			},
			{
				name: 'GNU LGPLv3',
				value: 'lgpl-3.0',
			},
			{
				name: 'APACHE 2.0',
				value: 'apache-2.0',
			},
			{
				name: 'Mozilla Public 2.0',
				value: 'mpl-2.0',
			},
			{
				name: 'The Unlicense',
				value: 'unlicense',
			},
			{
				name: 'Boost Software 1.0 ',
				value: 'bsl-1.0',
			},
		],
	},
]);