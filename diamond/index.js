/* Jamie é programador e namorada de James. Ela gosta de diamantes e quer um colar de diamantes de James. Como James não sabe como fazer isso acontecer, ele precisa da sua ajuda.

Tarefa
Você precisa retornar uma string que se pareça com a forma de um losango quando impressa na tela, usando *caracteres asterisco ( ). Os espaços à direita devem ser removidos e cada linha deve ser encerrada com um caractere de nova linha ( \n).

Retorna null/nil/None/...se a entrada for um número par ou negativo, pois não é possível imprimir um losango de tamanho par ou negativo.

Exemplos
Um diamante tamanho 3:

 *
***
 *
...que apareceria como uma sequência de" *\n***\n *\n"

Um diamante tamanho 5:

  *
 ***
*****
 ***
  *
...aquilo é:

"  *\n ***\n*****\n ***\n  *\n" */

function diamond(size) {
	if (size % 2 === 0 || size < 1) return null;

	let diamondStr = '';

	for (let i = 1; i <= size; i += 2) {
		const spaces = (size - i) / 2;
		const stars = i;

		diamondStr += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
	}

	for (let i = size - 2; i >= 1; i -= 2) {
		const spaces = (size - i) / 2;
		const stars = i;

		diamondStr += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
	}

	return diamondStr;
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(2)); // null
console.log(diamond(-3)); // null
console.log(diamond(0)); // null
