/*O primeiro século vai do ano 1 até o ano 100 inclusive , o segundo século - do ano 101 até o ano 200 inclusive , etc.

Tarefa
Dado um ano, retorne o século em que ele está.

Exemplos
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
Nota: este kata usa uma construção estrita conforme mostrado na descrição e nos exemplos, você pode ler mais sobre isso aqui*/
const century = (year) => Math.ceil(year / 100);

console.log(century(1705), 18, 'Testing for year 1705');
