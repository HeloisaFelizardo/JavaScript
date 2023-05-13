/* O museu de coisas incrivelmente chatas
O museu de coisas incrivelmente maçantes quer se livrar de algumas exposições. Miriam, a arquiteta de interiores, apresenta um plano para remover as exposições mais chatas. Ela dá a eles uma classificação e, em seguida, remove aquele com a classificação mais baixa.

No entanto, assim que ela terminou de classificar todas as exposições, ela partiu para uma feira importante, então ela pede para você escrever um programa que lhe diga as classificações dos itens depois que um removeu o mais baixo. Justo.

Tarefa
Dada uma matriz de inteiros, remova o menor valor. Não altere a matriz/lista original. Se houver vários elementos com o mesmo valor, remova aquele com um índice menor. Se você obtiver um array/lista vazio, retorne um array/lista vazio.

Não altere a ordem dos elementos restantes.

Exemplos
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1] */

const removeSmallest = (numbers) => {
	numbers = numbers.slice(0);
	const minNumber = Math.min(...numbers);
	const index = numbers.indexOf(minNumber);
	numbers.splice(index, 1);
	return numbers;
};

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([]));
