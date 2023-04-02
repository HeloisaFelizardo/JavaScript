/* Livro de notas
Complete a função para que ela encontre a média das três notas passadas a ela e retorne o valor da letra associada a essa nota.

Pontuação Numérica	Letra Nota
90 <= pontuação <= 100	'A'
80 <= pontuação < 90	'B'
70 <= pontuação < 80	'C'
60 <= pontuação < 70	'D'
0 <= pontuação < 60	'F'
Os valores testados estão todos entre 0 e 100. Não há necessidade de verificar valores negativos ou valores maiores que 100. */

function getGrade(s1, s2, s3) {
	// Code here
	let s = (s1 + s2 + s3) / 3;
	return s >= 90 ? 'A' : s >= 80 ? 'B' : s >= 70 ? 'C' : s >= 60 ? 'D' : 'F';
}

/* function getGrade (s1, s2, s3) {
 var avg = (s1 + s2 + s3)/3;
 switch(true) {
   case (avg >= 90):
     return 'A';
   case ( avg >= 80):
     return 'B';
   case ( avg >= 70):
     return 'C';
   case ( avg >= 60):
     return 'D'; 
   default:
     return 'F';   
 }
} */

console.log(getGrade(95, 90, 93), 'A');
console.log(getGrade(100, 85, 96), 'A');
console.log(getGrade(92, 93, 94), 'A');

console.log(getGrade(70, 70, 100), 'B');
console.log(getGrade(82, 85, 87), 'B');
console.log(getGrade(84, 79, 85), 'B');
console.log(getGrade(89, 89, 90), 'B');

console.log(getGrade(70, 70, 70), 'C');
console.log(getGrade(75, 70, 79), 'C');
console.log(getGrade(60, 82, 76), 'C');

console.log(getGrade(65, 70, 59), 'D');
console.log(getGrade(66, 62, 68), 'D');
console.log(getGrade(58, 62, 70), 'D');

console.log(getGrade(44, 55, 52), 'F');
console.log(getGrade(48, 55, 52), 'F');
console.log(getGrade(58, 59, 60), 'F');
