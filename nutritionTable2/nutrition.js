/**
 * Complete a função renderTableRowsde forma que ela retorne o seguinte HTML:

<tr>
    <td>label here</td>
    <td>value here</td>
</tr>
para cada linha que recebe em seu rowsparâmetro.

Os rowsparâmetros se parecem com o seguinte:

[["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]]
Esta é uma matriz aninhada. Cada array interno contém 2 itens, o primeiro referindo-se ao labelque você deve substituir em vez de label heree o segundo referindo-se ao valueque você deve substituir em vez de value here.
Certifique-se de usar console.log() a cada passo do caminho para visualizar com o que você está trabalhando.

Não se esqueça de olhar o resultado final na aba do navegador!
 * @param {array[][]} rows
 */
export function renderTableRows(rows) {
	console.log(rows);
	let html = '';
	rows.forEach((row) => {
		html += `<tr>
                    <td>${row[(1, 0)]}</td>
                    <td>${row[(0, 1)]}</td>
                </tr>`;
	});

	return html;
}
