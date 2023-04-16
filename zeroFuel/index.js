/* Você estava acampando com seus amigos longe de casa, mas quando chega a hora de voltar, você percebe que o combustível está acabando e a bomba mais próxima está a 50quilômetros de distância! Você sabe que, em média, seu carro roda cerca de 25milhas por galão. Restam 2galões.

Considerando esses fatores, escreva uma função que diga se é possível chegar à bomba ou não.

A função deve retornar truese for possível e falsese não. */

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
	distanceToPump <= mpg * fuelLeft;

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
