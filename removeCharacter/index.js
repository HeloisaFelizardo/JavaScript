/* Este é um spin-off do meu primeiro kata .

Você recebe uma string contendo uma sequência de sequências de caracteres separadas por vírgulas.

Escreva uma função que retorne uma nova string contendo as mesmas sequências de caracteres, exceto a primeira e a última, mas desta vez separadas por espaços.

Se a string de entrada estiver vazia ou a remoção do primeiro e último itens fizer com que a string resultante fique vazia, retorne um valor vazio (representado como um valor genérico NULLnos exemplos abaixo).

Exemplos
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL */

const array = (str) => {
	let array = str.split(',');

	return array.length > 2
		? array.slice(1, -1).join(', ').replaceAll(',', '')
		: null;
};

/* function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  } */

console.log(array(''));
console.log(array('1'));
console.log(array('A1,B2'));
console.log(array('1,2,3'));
console.log(array('1,2,3,4'));
console.log(array('A1,B2,C3,D4,E5'));
console.log(array('A,1,23,456,78,9,Z'));

/* console.log(arr('', null));
console.log(arr('1', null));
console.log(arr('A1,B2', null));
console.log(arr('1,2,3', '2'));
console.log(arr('1,2,3,4', '2 3'));
console.log(arr('A1,B2,C3,D4,E5', 'B2 C3 D4'));
console.log(arr('A,1,23,456,78,9,Z', '1 23 456 78 9')); */
