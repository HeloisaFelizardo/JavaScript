/* Sua tarefa é criar uma função que execute quatro operações matemáticas básicas.

A função deve receber três argumentos - operation(string/char), value1(number), value2(number).
A função deve retornar resultado de números após a aplicação da operação escolhida.

Exemplos(Operador, valor1, valor2) --> saída
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
 */

const basicOp = (operation, value1, value2) =>
	eval(value1 + operation + value2);

console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);
