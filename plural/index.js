/* Precisamos de uma função simples que determine se um plural é necessário ou não. Deve receber um número e retornar true se um plural deve ser usado com esse número ou false se não. Isso seria útil ao imprimir uma string como 5 minutes, 14 applesou 1 sun.

Você só precisa se preocupar com as regras gramaticais do inglês para este kata, onde qualquer coisa que não seja singular (um de algo), é plural (não um de algo).

Todos os valores serão inteiros positivos ou flutuantes ou zero. */

const plural = (n) => n !== 1;

console.log(plural(0), true, 'Plural for 0');
console.log(plural(0.5), true, 'Plural for 0.5');
console.log(plural(1), false, 'Plural for 1');
console.log(plural(100), true, 'Plural for 100');
console.log(plural(Infinity), true, 'Plural for Infinity');
