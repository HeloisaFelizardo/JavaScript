// TODO: create a new folder on your computer
// run `npm init`
// return the contents of package.json in the function below

const getPackageJson = () => {
	return {
		name: 'getpackagejson',
		version: '1.0.0',
		description: 'Test for get package json',
		main: 'index.js',
		scripts: {
			test: 'test',
		},
		repository: {
			type: 'git',
			url: 'git+https://github.com/HeloisaFelizardo/get-package-json.git',
		},
		keywords: ['get', 'package', 'json'],
		author: 'Heloisa Felizardo Campos',
		license: 'ISC',
		bugs: {
			url: 'https://github.com/HeloisaFelizardo/get-package-json/issues',
		},
		homepage: 'https://github.com/HeloisaFelizardo/get-package-json#readme',
	};
};

// Sample usage - do not modify
console.log(getPackageJson());
