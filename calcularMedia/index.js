/* Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */

const calcularMedia = (nota1, nota2, nota3) => {
	let media = (nota1 + nota2 + nota3) / 3;

	return media < 5
		? 'Reprovado'
		: media >= 5 && media <= 7
		? 'Recuperação'
		: 'Passou de semestre';
};

console.log(calcularMedia(7, 9, 8));
console.log(calcularMedia(3, 4, 4));
console.log(calcularMedia(5, 3, 7));
