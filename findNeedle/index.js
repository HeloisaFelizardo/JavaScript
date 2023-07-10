/* Você consegue encontrar a agulha no palheiro?

Escreva uma função findNeedle()que receba um arraycheio de lixo, mas contendo um"needle"

Depois que sua função encontrar a agulha, ela deve retornar uma mensagem (como uma string) que diz:

"found the needle at position "mais o indexque encontrou a agulha, então: */
let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
let haystack_3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];

const findNeedle = (haystack) => {
	const include = haystack.includes('needle');
	const index = haystack.indexOf('needle');
	return include ? `found the needle at position ${index}` : undefined;
};

console.log(findNeedle(haystack_1), undefined, "Your function didn't return anything");
console.log(findNeedle(haystack_1), 'found the needle at position 3');
console.log(findNeedle(haystack_2), 'found the needle at position 5');
console.log(findNeedle(haystack_3), 'found the needle at position 30');
