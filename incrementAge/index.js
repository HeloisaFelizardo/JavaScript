/* Complete a função incrementAgede forma que ela adicione 1à idade atual do userparâmetro que ela recebe.
Importante : observe como o sampleUserobjeto original sofre mutação. Veja o resultado do último console.log(sampleUser)no exemplo de uso e veja como o objeto mudou (foi modificado). */

/**
 * @param {Object} user
 * @param {number} user.id
 * @param {number} user.age
 */
const incrementAge = (user) => {
	return (user.age += 1);
};

// Sample usage - do not modify
const sampleUser = {
	id: 1,
	age: 23,
};
incrementAge(sampleUser);
console.log(sampleUser); // notice how that gets mutated
