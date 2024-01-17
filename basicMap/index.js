class InventoryManager {
	// Construtor da classe, inicializa o inventário como um Map vazio
	constructor() {
		this.inventory = new Map();
	}

	// Método para adicionar um item ao inventário com a quantidade especificada
	addItem(itemId, quantity) {
		// Define o par chave-valor no Mapa (itemId como chave e quantity como valor)
		this.inventory.set(itemId, quantity);
		// Imprime uma mensagem indicando que o item foi adicionado ao inventário
		console.log(`Item ${itemId} added to the inventory (${quantity} times)`);
	}

	// Método para obter o número total de itens no inventário
	getInventoryCount() {
		// Obtém o tamanho do Mapa, que representa a contagem de itens no inventário
		const count = this.inventory.size;
		// Imprime uma mensagem indicando o número total de itens no inventário
		console.log(`The inventory contains ${count} items`);
		// Retorna a contagem para possíveis usos futuros
		return count;
	}
}

// Exemplo de uso da classe
const manager = new InventoryManager(); // Cria uma instância do InventoryManager
manager.addItem('X-914', 5); // Adiciona o item 'X-914' ao inventário, 5 vezes
manager.addItem('X-152', 20); // Adiciona o item 'X-152' ao inventário, 20 vezes
manager.getInventoryCount(); // Obtém e imprime o número total de itens no inventário
