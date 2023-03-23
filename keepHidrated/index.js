/* Nathan adora andar de bicicleta.

Como Nathan sabe que é importante se manter hidratado, ele bebe 0,5 litro de água por hora de pedalada.

Você recebe o tempo em horas e precisa retornar o número de litros que Nathan vai beber, arredondado para o menor valor.

Por exemplo:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5 */

const litres = (time) => {
	let litres = 0;

	for (let i = 1; i <= Math.floor(time); i++) {
		litres += 0.5;
	}
	return Math.floor(litres);

	// return Math.floor(time * 0.5);
};
/* 
console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres'); */

console.log(litres(2));
console.log(litres(1.4));
console.log(litres(12.3));
console.log(litres(0.82));
console.log(litres(11.8));
console.log(litres(1787));
console.log(litres(0));
