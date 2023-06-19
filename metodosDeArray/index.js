let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const isEven = (x) => x % 2 === 0;
//Método Entries
let aEntries = numbers.entries(); //obtem um iterador de pares chaves/valor

console.log(`Obtém um iterador de chave/valor:`);
for (const n of aEntries) {
	console.log(n);
}
//Método keys
const aKeys = numbers.keys(); //obtém um iterador de chaves
console.log(`Obtém um iterador de chaves:`);
for (const n of aKeys) {
	console.log(n);
}

//Método values
const aValues = numbers.values();
console.log(`Obtém um iterador de valores:`);
for (const n of aValues) {
	console.log(n);
}

//Iterando com o método every
console.log(`Itera pelos elementos do array até que a função retorna false:`);
console.log(numbers.every(isEven));

//Iterando com o método some
console.log(`Itera pelos elementos do array até que a função retorna true:`);
console.log(numbers.some(isEven));

//Iterando com forEach
console.log(`Itera pelos elementos do array, o mesmo que o laço for:`);
numbers.forEach((x) => console.log(x % 2 === 0));

//Iterantdo com o laço for...of
console.log(`Itera pelos elementos do array, o mesmo que o laço for e forEach:`);
for (const n of numbers) {
	console.log(n % 2 === 0 ? 'even' : 'odd');
}

//Iterando com o método map
console.log(`Retorna um novo array e retorna true para numeros pares, e false para numeros impares:`);
const myMap = numbers.map(isEven);
console.log(myMap);

//Iterando com o método filter
console.log(`Retorna um novo array como os elementos para os quais a função devolveu true:`);
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

//Iterando com o método reduce
console.log(`Retorna a soma de todos os numeros do array:`);
const sumNumbers = numbers.reduce((total, current) => total + current, 0);
console.log(sumNumbers);

//Método from
console.log(`Cria uma cópia do array existente`);
let numbers2 = Array.from(numbers);
console.log(numbers2);

let evens = Array.from(numbers, isEven);
console.log(evens);

//Método Array.of
console.log(`Cria outro array a partir dos argumentos passados para o método`);
let numbers3 = Array.of(1);
console.log(numbers3);

let numbers4 = Array.of(1, 2, 3, 4, 5, 6);
console.log(numbers4);

let numbersCopy = Array.of(...numbers4);
console.log(numbersCopy);

//Método fill
console.log(`Preenche o array com um valor`);
numbersCopy.fill(0);
console.log(numbersCopy);

numbersCopy.fill(2, 1);
console.log(numbersCopy);

numbersCopy.fill(1, 3, 5);
console.log(numbersCopy);

let ones = Array(6).fill(1); //Cria um array de tamanho 6 e todos os seus valores serão iguais a 1
console.log(ones);

//Método copyWithin
console.log(`Copia uma sequencia de valores do array para a posição de um índice de início`);
let copyArray = [1, 2, 3, 4, 5, 6];

copyArray.copyWithin(0, 3);
console.log(copyArray);

copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5);
console.log(copyArray);

//Método reverse
console.log(numbers.reverse());

//Metodo sort - ordenação de elementos
console.log(numbers.sort((a, b) => a - b));

const friends = [
	{ name: 'John', age: 30 },
	{ name: 'Ana', age: 20 },
	{ name: 'Chris', age: 25 },
];

let comparePerson = friends.sort((a, b) => a.age - b.age);

console.log(comparePerson);

comparePerson = (a, b) => (a.age < b.age ? -1 : a.age > b.age ? 1 : 0);

console.log(friends.sort(comparePerson));

//Método localeCompare - para ordenar em ordem alfabética com minusculas primeiro
let names = ['Ana', 'ana', 'john', 'John'];

console.log(names.sort((a, b) => a.localeCompare(b)));

//Método indexOf
console.log(numbers);
numbers.push(10);
console.log(numbers);
console.log(numbers.indexOf(10));
console.log(numbers);
console.log(numbers.lastIndexOf(10));

//Métodos find e findIndex

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const multiplyOf13 = (element, index, array) => element % 13 == 0;

console.log();
console.log(numbers.find(multiplyOf13));
console.log(numbers.findIndex(multiplyOf13));

//Método includes
console.log(numbers.includes(15));
console.log(numbers.includes(20));
console.log(numbers.includes(4, 6));
