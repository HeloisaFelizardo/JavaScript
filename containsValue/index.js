/* Você receberá um array ae um valor x. Tudo o que você precisa fazer é verificar se o array fornecido contém o valor.

Array pode conter números ou strings. X pode ser qualquer um.

Retorne truese a matriz contiver o valor, falsecaso contrário.*/
function check(a, x) {
	// your code here
	return a.includes(x) ? true : false;
}
console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
