/* Complete a função getStringSizesde forma que ela retorne um array com o número de caracteres para cada string que receber no stringsparâmetro.

Isso significa que, para o array, ["abc", "d"]ele deve retornar [3, 1]porque a primeira string é composta por 3 caracteres e a segunda string é composta por 1 caractere.

Observe que os testes verificarão se você está usando uma função de seta ao iterar sobre o array (o retorno implícito é opcional). */

/**
 * @param {string[]} strings
 */
const getStringSizes = (strings) => strings.map((str) => str.length);

// Sample usage - do not modify
console.log(getStringSizes(['a', 'abc'])); // [1, 3]
console.log(getStringSizes(['Sam', 'Alex', 'Charlie'])); // [3, 4, 7]
console.log(getStringSizes(['Hello', 'Blue'])); // [5, 4]
