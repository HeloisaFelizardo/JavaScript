/* Verifique se uma string tem a mesma quantidade de 'x's e 'o's. O método deve retornar um booleano e não diferenciar maiúsculas de minúsculas. A string pode conter qualquer caractere.

Exemplos de entrada/saída:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

const XO = (str) =>
	(str.match(/[x]/gi) || []).length === (str.match(/[o]/gi) || []).length;

console.log(XO('xo'), true);
console.log(XO('xxOo'), true);
console.log(XO('xxxm'), false);
console.log(XO('Oo'), false);
console.log(XO('ooom'), false);
