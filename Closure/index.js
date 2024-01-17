/* Cada vez que você clica no botão Iniciar jogo , ele está chamando as funções startGame()e logAnalytics().
Atualize o ouvinte de evento de forma que ele chame apenas uma startGame()vez, mas continue ligando logAnalytics()sempre. */

// Variável que controla se a função startGame já foi chamada
let isCalled = false;

// Obtém o botão do documento pelo ID
const button = document.querySelector('#app-button');

// Adiciona um ouvinte de eventos de clique ao botão
button.addEventListener('click', () => {
	// Verifica se a função startGame ainda não foi chamada
	if (!isCalled) {
		// Chama a função startGame
		startGame();

		// Atualiza a variável para indicar que a função já foi chamada
		isCalled = true;
	}

	// Chama a função logAnalytics sempre que o botão é clicado
	logAnalytics();
});

// Função que não deve ser modificada - inicia o jogo
function startGame() {
	console.log('game started!');
}

// Função que não deve ser modificada - registra dados analíticos
function logAnalytics() {
	console.log('log analytics');
}
