/* A string é maiúscula?
Tarefa
Crie um método para ver se a string é ALL CAPS.

Exemplos (entrada -> saída)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
Neste Kata, diz-se que uma string está em TODAS AS MAIÚSCULAS sempre que não contém nenhuma letra minúscula, então qualquer string que não contenha nenhuma letra é trivialmente considerada em TODAS AS MAIÚSCULAS. */

String.prototype.isUpperCase = function () {
	// your code here
	return this.valueOf().toUpperCase() === this.valueOf();
};

console.log('', 'isUpperCase', 'Must define the prototype isUpperCase');
console.log('c'.isUpperCase(), false, 'c is not upper case');
console.log('C'.isUpperCase(), true, 'C is upper case');
console.log(
	'hello I AM DONALD'.isUpperCase(),
	false,
	'hello I AM DONALD not is upper case'
);
console.log(
	'HELLO I AM DONALD'.isUpperCase(),
	true,
	'HELLO I AM DONALD is upper case'
);
console.log(
	'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(),
	false,
	'ACSKLDFJSgSKLDFJSKLDFJ not is upper case'
);
console.log(
	'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(),
	true,
	'ACSKLDFJSGSKLDFJSKLDFJ is upper case'
);
