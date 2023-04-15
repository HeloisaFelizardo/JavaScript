/* Escreva uma função chamada setAlarm que recebe dois parâmetros. O primeiro parâmetro, Employees , é verdadeiro sempre que você está empregado e o segundo parâmetro, vacation , é verdadeiro sempre que você está de férias.

A função deve retornar true se você estiver empregado e não estiver de férias (porque essas são as circunstâncias nas quais você precisa definir um alarme). Caso contrário, deve retornar falso. Exemplos:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true */

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, true), false, 'Should be false.');
console.log(setAlarm(false, true), false, 'Should be false.');
console.log(setAlarm(true, false), true, 'Should be true.');
