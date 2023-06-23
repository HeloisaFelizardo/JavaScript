/* Criamos a função waitForCompleteClickque será concluída quando o usuário (você) clicar no botão Concluir na aba do navegador e falhará quando você clicar no botão Falha.
Atualize o código de index.jsforma que ele console.log("Complete clicked");seja executado após você clicar no botão completo e console.error("Fail clicked")após clicar no botão de falha.
Ao contrário da wait()função, esta função não aceita nenhum parâmetro.
Certifique-se de tentar o resultado final na guia do navegador . */

import { waitForCompleteClick } from './helpers.js';

waitForCompleteClick()
	.then(() => console.log('Complete clicked'))
	.catch(() => console.error('Fail clicked'));
