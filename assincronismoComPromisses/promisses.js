const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');

const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath);

promessaDaLeituraDoArquivo
	.then((arquivo) => arquivo.toString('utf-8'))
	.then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
	.then((linhasSemCabecalho) =>
		linhasSemCabecalho.map((linha) => {
			const [tarefa, feito] = linha.split(';');
			return {
				tarefa,
				feito: feito.trim() === 'True',
			};
		})
	)
	.then((listaDeTarefas) => console.log(listaDeTarefas))
	.catch((error) => console.log('Erro!', error));
