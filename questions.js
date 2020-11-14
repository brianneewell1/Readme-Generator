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
	