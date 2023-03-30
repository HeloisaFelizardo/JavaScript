/* Um quadrado de quadrados
Você gosta de blocos de construção. Você gosta especialmente de blocos de construção que são quadrados. E o que você mais gosta, é organizá-los em um quadrado de blocos de construção quadrados!

No entanto, às vezes, você não pode organizá-los em um quadrado. Em vez disso, você acaba com um retângulo comum! Essas malditas coisas! Se você tivesse uma maneira de saber se está trabalhando em vão... Espere! É isso! Você só precisa verificar se o número de blocos de construção é um quadrado perfeito .

Tarefa
Dado um número inteiro, determine se é um número quadrado :

Em matemática, um número quadrado ou quadrado perfeito é um número inteiro que é o quadrado de um número inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo.

Os testes sempre usarão algum número inteiro, então não se preocupe com isso em linguagens com tipagem dinâmica.

Exemplos
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

const isSquare = (n) => Math.sqrt(n) % 1 === 0;

//alternativa

// const isSquare = (n) => Number.isInteger(Math.sqrt(n));

console.log(
	isSquare(-1),
	false,
	'-1: Negative numbers cannot be square numbers'
);
console.log(isSquare(0), true, '0 is a square number (0 * 0)');
console.log(isSquare(3), false, '3 is not a square number');
console.log(isSquare(4), true, '4 is a square number (2 * 2)');
console.log(isSquare(25), true, '25 is a square number (5 * 5)');
console.log(isSquare(26), false, '26 is not a square number');
