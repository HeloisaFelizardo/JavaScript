/* Reescreva a importação estática em uma importação dinâmica. Mantenha as console.log()chamadas (talvez seja necessário reposicioná-las). */

import('./helpers.mjs').then((module) => {
	console.log(module);
	const User = module.default;
	const canVote = module.canVote;

	const user = new User('Sam', 'Green');
	console.log(user.getFullName()); // Sam Green
	console.log(canVote(20)); // true
});
