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
	