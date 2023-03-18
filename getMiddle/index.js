/* Você vai receber uma palavra. Seu trabalho é retornar o caractere do meio da palavra. Se o comprimento da palavra for ímpar, retorne o caractere do meio. Se o comprimento da palavra for par, retorne os 2 caracteres do meio.

#Exemplos:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Entrada

Uma palavra (string) de comprimento 0 < str < 1000(em javascript, você pode obter um pouco mais de 1000 em alguns casos de teste devido a um erro nos casos de teste). Você não precisa testar para isso. Isso está aqui apenas para dizer que você não precisa se preocupar com o tempo limite da solução.

#Saída

O(s) caractere(s) do meio da palavra representada(s) como uma string. */

const getMiddle = (s) =>
	s.length % 2 === 0
		? s.substring(s.length / 2 - 1, s.length / 2 + 1)
		: s.at(s.length / 2);

console.log(getMiddle('test'), 'es');
console.log(getMiddle('testing'), 't');
console.log(getMiddle('middle'), 'dd');
console.log(getMiddle('A'), 'A');

console.log(typeof getMiddle('Arnold'));
