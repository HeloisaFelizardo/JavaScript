/* Você provavelmente conhece o sistema de "curtir" do Facebook e outras páginas. As pessoas podem "curtir" postagens de blog, fotos ou outros itens. Queremos criar o texto que deve ser exibido ao lado de tal item.

Implemente a função que recebe um array contendo os nomes das pessoas que gostam de um item. Ele deve retornar o texto de exibição conforme os exemplos:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Nota: Para 4 ou mais nomes, o número "and 2 others"simplesmente aumenta. */

function likes(names) {
	return {
		0: 'no one likes this',
		1: `${names[0]} likes this`,
		2: `${names[0]} and ${names[1]} like this`,
		3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
		4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
	}[Math.min(4, names.length)];
}

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Karen']));
