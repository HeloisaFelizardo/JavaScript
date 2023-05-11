/* Dada uma matriz de números inteiros, encontre aquele que aparece um número ímpar de vezes.

Sempre haverá apenas um número inteiro que aparece um número ímpar de vezes.

Exemplos
[7]deve retornar 7, porque ocorre 1 vez (o que é ímpar).
[0]deve retornar 0, porque ocorre 1 vez (o que é ímpar).
[1,1,2]deve retornar 2, porque ocorre 1 vez (o que é ímpar).
[0,1,0,1,0]deve retornar 0, porque ocorre 3 vezes (o que é estranho).
[1,2,2,3,3,3,4,3,3,3,2,2,1]deve retornar 4, pois aparece 1 vez (o que é estranho). */

const findOdd = (matriz) => {
	const ocorrencias = {};
	for (const num of matriz) {
		num in ocorrencias ? ocorrencias[num]++ : (ocorrencias[num] = 1);
	}
	for (const num in ocorrencias) {
		if (ocorrencias[num] % 2 !== 0) {
			return parseInt(num);
		}
	}
};

/* Nessa solução, a função findOdd() recebe uma matriz de números inteiros como argumento. Em seguida, ela cria um objeto ocorrencias para contar o número de ocorrências de cada número na matriz usando um laço for.

Depois que todas as ocorrências são contadas, a função percorre o objeto ocorrencias usando outro laço for para encontrar o número que ocorre um número ímpar de vezes. Se encontrar um número com o número ímpar de ocorrências, a função o retorna.

Observe que, na última linha da função findOdd(), usamos a função parseInt() para converter a chave do objeto ocorrencias em um número inteiro, já que as chaves dos objetos em JavaScript são sempre do tipo string.
} */

/* function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
} */

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
