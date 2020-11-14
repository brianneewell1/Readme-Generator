const questions = [
    {
		//Author
		type: 'input',
		message: 'Enter your first and last name',
		name: 'author',
		validate: function(name) {
			let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid first and last name.';
		},
	},
    {
		//Email
		type: 'input',
		message: 'Enter your email',
		name: 'email',
		validate: function(email) {
			let pass = email.match(/\S+@\S+\.\S+/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid email.';
		},
	},
	{
		//Github Username
		type: 'input',
		message: 'Enter your github username',
		name: 'username',
		validate: function(username) {
			if (username) {
				return true;
			}

			return 'A github username is required';
		},
	},
	{
		//Repo name
		type: 'input',
		message: 'Enter the name for your Github Repository',
		name: 'repo',
		validate: function(repo) {
			if (repo) {
				return true;
			}

			return 'A github repository is required';
		},
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
		message: 'Enter the additional project link(s) using the entire link, including the http(s):. (* Use comma "," to seprate each link)',
		when: function(answers) {
			return answers.isLinks !== false;
		},
		validate: function(projectLinks) {
			for (let i = 0; i < projectLinks.split(',').length; i++) {
				let pass = projectLinks.split(',')[i].trim().match(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/g);
			
			if (pass) {
				return true;
			}
				
			return 'Provide the valid links of the project using the entire link, including the http(s):';
			}
		},
	},
	{
		//Project Title
		type: 'input',
		message: 'Enter your project title',
		name: 'title',
		validate: function(title) {
			if (title) {
				return true;
			}

			return 'A project title is required';
		},
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
		when: function(answers) {
			return answers.screenshots !== false;
		},
		validate: function(imageURL) {
			if (imageURL) {
				return true;
			}

			return 'Please add the image path or URL to attach screenshots or a demo';
		},
	},
	{
		//Project objective
		type: 'input',
		message: 'What is your project objective?',
		name: 'objective',
		validate: function(objective) {
			if (objective) {
				return true;
			}

			return 'Please provide an objective for your project';
		},
	},
	{
		// Project user-story
		type: 'input',
		message: 'Provide the User Story for your project',
		name: 'userStory',
		validate: function(userstory) {
			if (userstory) {
				return true;
			}

			return 'Please provide a user story for your project';
		},
	},
	{
		//Technologies used
		type: 'input',
		message: 'List the technologies used in your project. (* Use comma "," to separate each technology)',
		name: 'technologies',
		validate: function(tech) {
			if (tech) {
				return true;
			}

			return 'Please provide a list of the technologies used';
		},
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
];

module.exports = questions;