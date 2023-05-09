/* Pegue uma matriz e remova cada segundo elemento da matriz. Mantenha sempre o primeiro elemento e comece a remover com o próximo elemento.

Exemplo:
["Keep", "Remove", "Keep", "Remove", "Keep", ...]-->["Keep", "Keep", "Keep", ...]

Nenhuma das matrizes estará vazia, então você não precisa se preocupar com isso!*/

const removeEveryOther = (arr) =>
	arr.filter((element, index) => index % 2 === 0);

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther([[1, 2]]));
console.log(removeEveryOther([['Goodbye'], { Great: 'Job' }]));
