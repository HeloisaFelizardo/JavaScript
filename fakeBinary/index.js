/* Dada uma sequência de dígitos, você deve substituir qualquer dígito abaixo de 5 por '0' e qualquer dígito de 5 e acima por '1'. Retorne a string resultante.

Nota: a entrada nunca será uma string vazia */

function fakeBin(x) {
	return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');

	/* 	let result = '';
  for(let i = 0; i < x.length; i++){
    x[i] < 5 ? result += 0 : result += 1;
  }
  return result; */
}

//Alternativa

// return x.split('').map(n => n < 5 ? 0 : 1).join('');

/* console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(
	fakeBin('366058562030849490134388085'),
	'011011110000101010000011011'
);
 */
console.log(fakeBin('45385593107843568'));
console.log(fakeBin('509321967506747'));
console.log(fakeBin('366058562030849490134388085'));
