const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');

async function buscarArquivos() {
	try {
		const arquivo = await fs.promises.readFile(filePath);
		const textoDoArquivo = arquivo.toString('utf8');
		const linhasSemCabecalho = textoDoArquivo.split('\n').slice(1);
		const listaDeTarefas = linhasSemCabecalho.map((linha) => {
			const [tarefa, feito] = linha.split(';');
			return {
				tarefa,
				feito: feito.trim() === 'True',
			};
		});
		console.log(listaDeTarefas);
	} catch (error) {
		console.log('Deu Erro!');
	} finally {
		console.log('Finalizou!');
	}
}

buscarArquivos();
