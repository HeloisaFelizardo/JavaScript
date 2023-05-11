/* Complete a solução para que a função quebre a casca do camelo, usando um espaço entre as palavras.

Exemplo
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

const solution = (string) => {
	return string
		.split('')
		.map((element) =>
			element === element.toUpperCase()
				? (element = ' ' + element)
				: element
		)
		.join('');
};

console.log(solution('camelCasing'));
console.log(solution('camelCasingTest'));

/* console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result');
console.log(
	solution('camelCasingTest'),
	'camel Casing Test',
	'Unexpected result'
);
 */
