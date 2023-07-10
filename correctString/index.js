/* O software de reconhecimento de caracteres é amplamente utilizado para digitalizar textos impressos. Assim, os textos podem ser editados, pesquisados ​​e armazenados em um computador.

Quando os documentos (especialmente os muito antigos escritos com uma máquina de escrever) são digitalizados, os softwares de reconhecimento de caracteres geralmente cometem erros.

Sua tarefa é corrigir os erros no texto digitalizado. Você só tem que lidar com os seguintes erros:

S é mal interpretado como5
Oé mal interpretado como0
Ié mal interpretado como1
Os casos de teste contêm números apenas por engano. */

const correct = (string) =>
	string
		.split('')
		.map((char) => (char === '0' ? 'O' : char === '1' ? 'I' : char === '5' ? 'S' : char))
		.join('');

/* correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S') */

console.log(correct('L0ND0N'), 'LONDON');
console.log(correct('DUBL1N'), 'DUBLIN');
console.log(correct('51NGAP0RE'), 'SINGAPORE');
console.log(correct('BUDAPE5T'), 'BUDAPEST');
console.log(correct('PAR15'), 'PARIS');
