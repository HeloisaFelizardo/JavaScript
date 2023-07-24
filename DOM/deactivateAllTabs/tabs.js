/* Abrir barra lateral 
Esta página contém 3 guias. Cada guia tem uma classe tab. O que está ativado no momento tem a classe active.
Quando você clica em qualquer uma das guias, chamamos as seguintes funções em ordem:

deactivateAllTabs(): esta função não recebe parâmetros e deve remover a classe activede todos os .tabelementos (ou, como apenas uma guia pode estar ativa neste desafio, você pode remover a classe activeda guia ativa no momento).
activateClickedTab(tab): esta função recebe o elemento tab que foi clicado pelo usuário e deve adicionar a classe activea este elemento.
Certifique-se de experimentá-lo na visualização do navegador . Além disso, sinta-se à vontade para adicionar console.log(tab)dentro activeClickedTabpara entender melhor o que ele recebe. */

export const deactivateAllTabs = () => {
	document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));
};

/**
 * @param {HTMLElement} tab
 */
export const activateClickedTab = (tab) => {
	tab.classList.add('active');
};
