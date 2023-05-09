/* Dados três inteiros a ,b,c, retorna o maior número obtido após a inserção dos seguintes operadores e colchetes :+,*,()
Em outras palavras, tente todas as combinações de a,b,c com [*+()] e retorne o máximo obtido 

Exemplo
Com os números 1, 2 e 3 , aqui estão algumas maneiras de colocar sinais e colchetes :

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
1 + 1 + 1 = 3
Portanto, o valor máximo que você pode obter é 9 .*/

/* function expressionMatter(a, b, c) {
	let op1 = a * (b + c);
	let op2 = a * b * c;
	let op3 = a + b * c;
	let op4 = (a + b) * c;
	let op5 = a + b + c;

	return Math.max(op1, op2, op3, op4, op5);
} */

const expressionMatter = (a, b, c) =>
	Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));

console.log(expressionMatter(2, 1, 2), 6);
console.log(expressionMatter(2, 1, 1), 4);
console.log(expressionMatter(1, 1, 1), 3);
console.log(expressionMatter(1, 2, 3), 9);
console.log(expressionMatter(1, 3, 1), 5);
console.log(expressionMatter(2, 2, 2), 8);
