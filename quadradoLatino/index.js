/* Escreva uma função que retorne um quadrado latino para qualquer inteiro positivo n. */
function quadradoLatino(n) {
	let matriz = [];
	let numeros = [];

	for (let i = 1; i <= n; i++) {
		numeros.push(i);
	}

	for (let i = 0; i < n; i++) {
		matriz[i] = numeros.slice(i).concat(numeros.slice(0, i));
	}

	return matriz;
}

// Exemplo de uso
let n = 4;
let quadrado = quadradoLatino(n);
for (let i = 0; i < n; i++) {
	console.log(quadrado[i]);
}
