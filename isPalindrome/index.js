/* Escreva uma função que verifique se uma determinada string (sem distinção entre maiúsculas e minúsculas) é um palíndromo . Um palíndromo é uma palavra, número, frase ou outra sequência de símbolos que lê o mesmo de trás para frente, como senhora ou carro de corrida, a data e hora 21/12/33 12:21 e a frase: "Um homem, um plano, um canal – Panamá". */

const isPalindrome = (x) =>
	x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

console.log(isPalindrome('a'), true);
console.log(isPalindrome('aba'), true);
console.log(isPalindrome('Abba'), true);
console.log(isPalindrome('hello'), false);
console.log(isPalindrome('Bob'), true);
console.log(isPalindrome('Madam'), true);
console.log(isPalindrome('AbBa'), true);
console.log(isPalindrome(''), true);
