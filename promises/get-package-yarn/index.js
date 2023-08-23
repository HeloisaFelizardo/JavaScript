// TODO: create a new folder on your computer
// run `npm init`
// return the contents of package.json in the function below

const getPackageJson = () => {
	return {
		name: 'package-yarn',
		version: '1.0.0',
		description: 'Install package yarn',
		main: 'index.js',
		repository: ' https://github.com/HeloisaFelizardo/get-package-yarn.git',
		author: 'Heloisa Felizardo Campos',
		license: 'MIT',
	};
};

// Sample usage - do not modify
console.log(getPackageJson());
