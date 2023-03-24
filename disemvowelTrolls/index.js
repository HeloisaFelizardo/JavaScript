/* Trolls estão atacando sua seção de comentários!

Uma forma comum de lidar com essa situação é retirar todas as vogais dos comentários dos trolls, neutralizando a ameaça.

Sua tarefa é escrever uma função que recebe uma string e retorna uma nova string com todas as vogais removidas.

Por exemplo, a string "Este site é para perdedores LOL!" se tornaria "Ths wbst s fr lsrs LL!".

Nota: para este kata ynão é considerado uma vogal. */

const disemvowel = (str) => str.replace(/[aeiouAEIOU]/g, '');

console.log(disemvowel('This website is for losers LOL!'));
console.log(
	disemvowel(
		"No offense but,\nYour writing is among the worst I've ever read"
	)
);
console.log(disemvowel('What are you, a communist?'));
