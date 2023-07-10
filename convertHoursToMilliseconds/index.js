/* Relógio mostra hhoras, mminutos e ssegundos depois da meia-noite.

Sua tarefa é escrever uma função que retorne a hora desde a meia-noite em milissegundos.

Exemplo:
h = 0
m = 1
s = 1

result = 61000 */

const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

console.log(past(0, 1, 1), 61000);
console.log(past(1, 1, 1), 3661000);
console.log(past(0, 0, 0), 0);
console.log(past(1, 0, 1), 3601000);
console.log(past(1, 0, 0), 3600000);
