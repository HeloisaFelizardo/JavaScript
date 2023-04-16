/* Bob está trabalhando como motorista de ônibus. No entanto, ele se tornou extremamente popular entre os moradores da cidade. Com tantos passageiros querendo embarcar em seu ônibus, ele às vezes tem que enfrentar o problema de não haver espaço suficiente no ônibus! Ele quer que você escreva um programa simples dizendo a ele se ele conseguirá acomodar todos os passageiros.

Visão geral da tarefa:
Você tem que escrever uma função que aceite três parâmetros:

cap é a quantidade de pessoas que o ônibus comporta, excluindo o motorista.
on é o número de pessoas no ônibus excluindo o motorista.
wait é o número de pessoas esperando para entrar no ônibus, excluindo o motorista.
Se houver espaço suficiente, retorne 0, e se não houver, retorne o número de passageiros que ele não pode levar.

Exemplos de uso:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting */

const enough = (cap, on, wait) => (cap < on + wait ? wait - (cap - on) : 0);

/* function enough(cap, on, wait) {
	return on + wait > cap ? on + wait - cap : 0;
} */

/* function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
} */

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);
console.log(enough(80, 24, 74), 18);
