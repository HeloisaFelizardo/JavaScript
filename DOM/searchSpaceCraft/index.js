/* O objetivo deste projeto é permitir que o usuário pesquise a espaçonave fornecida no data.jsarquivo digitando o nome da espaçonave na entrada de pesquisa.

A pesquisa não deve diferenciar maiúsculas de minúsculas (portanto, escrever luna e-1 no.1na entrada de pesquisa deve mostrar a Luna E-1 No.1espaçonave). Além disso, os espaços iniciais e finais na entrada de pesquisa devem ser ignorados.

Certifique-se de verificar a solução ao concluir este desafio, pois temos uma observação para você sobre o desempenho dessa abordagem.

Descrição não guiada
Experimente este projeto usando a descrição não guiada primeiro. Se você estiver preso, confira a descrição guiada abaixo.

Quando a página carregar, todas as espaçonaves devem ser mostradas.
Quando o usuário procura uma espaçonave, você deve mostrar apenas a espaçonave que corresponde à consulta de pesquisa do usuário.
A pesquisa não deve diferenciar maiúsculas de minúsculas e os espaços iniciais e finais devem ser ignorados.
Descrição guiada
Configurar

Comece encontrando a entrada de pesquisa e onde ulas naves espaciais serão listadas. Salve-os em variáveis.
Defina uma função chamada render()que espera um queryparâmetro.
Renderizar todas as espaçonaves

Comece fazendo essa função renderizar toda a espaçonave.
Adicione um ouvinte de evento na entrada de pesquisa para que a função de renderização seja chamada toda vez que o usuário escrever nessa entrada de pesquisa. Além disso, certifique-se de passar o valor que foi escrito pelo usuário como queryargumento.
Certifique-se de que, neste estágio, todas as espaçonaves sejam renderizadas quando o usuário digitar qualquer coisa na entrada de pesquisa. Além disso, certifique-se de que os resultados não sejam duplicados toda vez que você digitar um caractere na entrada de pesquisa.
Filtrar espaçonave

Filtre a espaçonave com base no queryargumento. Confira as dicas para mais detalhes.
Certifique-se de que, nesta fase, o usuário possa procurar uma espaçonave (desde que escreva o nome exatamente como está). Portanto, nesse estágio, a pesquisa diferencia maiúsculas de minúsculas.
Melhorando a busca

Salve o queryargumento em uma nova variável, por exemplo, cleanedupQuery. Vamos aplicar uma limpeza nessa nova variável para melhorar a pesquisa.
Para tornar a pesquisa sem distinção entre maiúsculas e minúsculas, você pode converter ambos, o cleanedupQuerye cada espaçonave para minúsculas. Para a espaçonave, você pode fazer isso dentro do .filter()callback.
Faça a pesquisa ignorar os espaços iniciais e finais chamando o trim()método em cleanedupQuery.
Certifique-se de que, nesta fase, o usuário possa procurar uma espaçonave. A pesquisa não deve diferenciar maiúsculas de minúsculas e deve ignorar os espaços iniciais e finais.
Renderizando no carregamento da página

Ainda precisamos renderizar uma lista de todas as espaçonaves quando a página for carregada. Para isso, comece chamando a render()função (sem nenhum argumento) no final do seu código. Isso quebrará seu código porque estamos chamando .toLowerCase()e .trim()no cleanedupQueryqual está uma cópia do queryargumento.
A maneira mais simples de corrigir esse problema é fornecer um valor padrão ao queryparâmetro. */

import { data } from './data.js';

// visualize one of the items in `data` (feel free to remove the next line)
console.log(data[0]);

// TODO: implement instant search
const results = document.querySelector('#results-list');
const search = document.querySelector('#app-search');

const render = (query = '') => {
	const cleanedupQuery = query.trim().toLowerCase();
	const filtered = data.filter((item) => item.spacecraft.toLowerCase().includes(cleanedupQuery));
	results.innerHTML = '';
	filtered.forEach((item) => {
		results.insertAdjacentHTML('beforeend', `<li>${item.spacecraft}</li>`);
	});
};

search.addEventListener('keyup', () => {
	render(search.value);
});

render();
