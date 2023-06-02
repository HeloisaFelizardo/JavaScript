/* Projeto de Jogo Gem Run
Este projeto apresenta alguns padrões avançados em Programação Orientada a Objetos com herança. Você provavelmente não encontrará esses padrões no desenvolvimento web front-end. No entanto, queríamos que você visse o quão poderoso ele pode ser!

Você está construindo a lógica por trás de um jogo teórico chamado Gem Run. Neste jogo, o jogador pode coletar moedas e joias .

Você pode simular a coleta de uma moeda ou gema clicando nos respectivos botões.

Cada coletado coinvale uma pontuação de 10 e cada gemcoletado vale uma pontuação de 50.

Então, digamos que você tenha 10 moedas e 2 pedras preciosas , seu scoreserá 10 * 10 + 2 * 50 = 200.

Embora seja possível implementar essa lógica de várias maneiras, você deve seguir os requisitos abaixo para passar nos testes. Isso é para mostrar um exemplo avançado de herança.

Requisitos
Cada etapa tem um conjunto de dicas que você pode ler clicando no botão obter uma dica . Eles são rotulados com base no número da seção e da subseção. Por exemplo, A.1.para a primeira tarefa abaixo.

A. Classe colecionável
Em collectibles.js, definimos uma classe Collectible. Esta será uma classe pai da qual outras classes ( Coine Gem) herdarão.

A razão pela qual temos essa classe pai é porque Cointemos Gemmuitos comportamentos/funcionalidades compartilhados. Ambos são "colecionáveis" durante um jogo e ambos afetam a pontuação (embora ambos tenham um "valor" diferente).

A Collectibleclasse deve ter um constructore receber o namee o worth. Um exemplo de nameé "coin". E, um exemplo de worthé 10. Então, mais adiante, diremos que a Coiné a Collectiblecom name = "coin"e worth = 10. Além disso, a Gemé a Collectiblecom name = "gem"e worth = 50.

Depois de definir o construtor, você deve capturar os 2 parâmetros e salvá-los.

Além disso, você deve definir uma nova variável de instância que contenha o counte defini-la como 0. Posteriormente, quando o jogador coletar um coin, por exemplo, incrementaremos esse contador.

Implemente o collect()método. Este método aumentará a variável da countvariável de instância em 1 (sempre, porque você só pode coletar 1 colecionável por vez).

Implemente o getScore()método. Este método deve retornar um número representando o valor da pontuação deste colecionável. Então, se o usuário coletou 5 moedas, deve retornar o resultado de 5 * 10(já que as moedas valem 10). Outro exemplo, se o usuário coletou 2 gemas, ele deve retornar 100(já que as gemas valem 50, então esse é o resultado de 2 * 50).

Implemente o getCollectedMessage()método. Este método retornará uma string parecida com esta: X Ys collectedonde Xé substituído pelo countcoletado e Ysubstituído pelo do namecolecionável. Assim, por exemplo, se o usuário coletasse 5 gemas, retornaria: 5 gems collected.

Observação: para todos os métodos acima, você não deve usar ifcondições. Isso porque você tem as variáveis ​​de instância this.namee this.worth.

B. Classes de moedas e pedras preciosas
A Coiné um tipo de Collectible. Assim é um Gem. Portanto, você deve atualizar as 2 classes para que elas herdem de Collectible.
Isso permitirá que uma instância da Coinclasse tenha métodos como collect(), getCollectedMessage()e getScore()(porque eles são herdados).

Dê uma olhada no código em USAGE OF CLASSES no arquivo index.js. A moeda é instanciada como const coin = new Coin()e o mesmo para a gema: const gem = new Gem(). Portanto, você precisa atualizar o constructor()for the Coine Gemclasses como ele chama o pai constructore especifica o namee o worth.
Como lembrete, o Cointem o nome"coin" e o valor de 10. E, o tem Gemum nome e valor de ."gem"50

Certifique-se de tentar coletar algumas joias/moedas na guia do navegador .

C. Classe GameScore
O objetivo da GameScoreaula é mostrar a pontuação do jogador. O código para esta classe tem que ir no game-score.jsarquivo.

Comece dando uma olhada novamente no código em USAGE OF CLASSES in index.js. Observe como criamos uma nova instância de GameScoree então chamamos gameScore.addCollectible(coin)e gameScore.addCollectible(gem). Estamos dizendo gameScoreque estamos lidando com esses 2 tipos de colecionáveis.

Defina o constructor()de GameScore. O constructor()não recebe parâmetros. No entanto, ele deve criar uma variável de instância chamada collectiblese defini-la como uma matriz vazia. Essa matriz irá armazenar os itens colecionáveis ​​depois que chamarmos gameScore.addCollectible(coin).

Implemente o addCollectible(collectible)método. Este método recebe um colecionável (uma instância de uma classe que herda de Collectible, por exemplo, a coinou a gem). Deve adicionar o collectibleque recebe à collectiblesvariável de instância. Portanto, toda vez que você chama essa função, ela adiciona o colecionável aos colecionáveis ​​existentes.

Por último, mas não menos importante, você deve implementar o getTotalScore()método. Este método deve passar por cada colecionável, chamar o getScore()método naquele colecionável e retornar a soma de todos esses números. Portanto, em nosso exemplo, temos 2 itens colecionáveis. Ele deve passar por esses dois itens colecionáveis, chamar getScore()os dois e retornar a soma desses 2 números. Esta será a pontuação que aparece na barra de navegação.

Notas finais
Este é um projeto avançado. É também o resultado de escrever código que tem muita duplicação e depois perceber que tem muita duplicação. Então, primeiro escrevemos a Coinclasse e a Gemclasse (sem Collectible). Então, percebemos que essas 2 classes compartilham muito código e foi quando refatoramos em uma Collectibleclasse.
O código pode parecer muito complicado para o jogo atual, no entanto, se você precisar adicionar um terceiro ou quarto tipo de colecionável (por exemplo, valer Trophypontos 100), será tão fácil quanto definir uma nova classe e adicionar essa instância a os colecionáveis. */

// do NOT remove the 'export' keyword
export class Collectible {
	// TODO: constructor, collect, getScore, and getCollectedMessage
	constructor(name, worth) {
		this.name = name;
		this.worth = worth;
		this.count = 0;
	}
	collect() {
		this.count++;
	}
	getScore() {
		return this.count * this.worth;
	}
	getCollectedMessage() {
		return `${this.count} ${this.name}s collected`;
	}
}

// do NOT remove the 'export' keyword
export class Coin extends Collectible {
	// TODO: constructor and inheritance
	constructor() {
		super('coin', 10);
	}
}

// do NOT remove the 'export' keyword
export class Gem extends Collectible {
	// TODO: constructor and inheritance
	constructor() {
		super('gem', 50);
	}
}
