/* Você está escrevendo um código para controlar os semáforos da sua cidade. Você precisa de uma função para lidar com cada alteração de green, para yellow, para red e, em seguida, para green novamente.

Conclua a função que recebe uma string como argumento representando o estado atual da luz e retorna uma string representando o estado para o qual a luz deve mudar.

Por exemplo, quando a entrada for green, a saída deve ser yellow. */

const updateLight = (current) =>
	current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';

/* const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current] */

console.log(updateLight('green'), 'yellow');
console.log(updateLight('yellow'), 'red');
console.log(updateLight('red'), 'green');
