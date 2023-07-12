/* Operador Lógico Exclusivo "or" (xor)
Visão geral
Em algumas linguagens de script como PHP, existe um operador lógico (por exemplo &&, ||, and, , or, etc.) chamado de "Exclusivo Ou" (daí o nome deste Kata). O exclusivo ou avalia dois booleanos. Em seguida, retorna truese exatamente uma das duas expressões for true , falsecaso contrário. Por exemplo:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Tarefa
Como não podemos definir palavras-chave em Javascript (bem, pelo menos não sei como fazer isso), sua tarefa é definir uma função xor(a, b)onde ae bsão as duas expressões a serem avaliadas. Sua xorfunção deve ter o comportamento descrito acima, retornando truese exatamente uma das duas expressões for avaliada como true , falsecaso contrário.

 */

function xor(a, b) {
	return a != b;
}

console.log(xor(false, false));
console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(true, true));
console.log(xor(true, true));

/* console.log(xor(false, false), false, 'false xor false');
console.log(xor(true, false), true, 'true xor false');
console.log(xor(false, true), true, 'false xor true');
console.log(xor(true, true), false, 'true xor true');
console.log(xor(true, true), true, "true xor true: 'xor' is NOT identical to 'or'"); */
