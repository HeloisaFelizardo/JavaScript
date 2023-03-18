/* Faça um programa que filtre uma lista de strings e retorne uma lista com apenas o nome de seus amigos.

Se um nome tiver exatamente 4 letras, pode ter certeza que deve ser um amigo seu! Caso contrário, você pode ter certeza que ele não é...

Ex: Entrada = ["Ryan", "Kieran", "Jason", "Yous"], Saída = ["Ryan", "Yous"]

ou seja

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"] */

//Modo arrow function
const friend = (friends) => friends.filter((friend) => friend.length === 4);

///Modo padrão
/* function friend(friends) {
	return friends.filter((friend) => {
		return friend.length === 4;
	});
} */

console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous']));
console.log(
	friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
);
