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
