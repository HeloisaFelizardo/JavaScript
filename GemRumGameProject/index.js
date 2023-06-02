import GameScore from './game-score.js';
// Note: Collectible is only imported so that we can test your code
import { Collectible, Coin, Gem } from './collectibles.js';

// ---------------------------
// USAGE OF CLASSES
// Read the next 9 lines
const coin = new Coin();
const gem = new Gem();
const gameScore = new GameScore();
try {
	gameScore.addCollectible(coin);
	gameScore.addCollectible(gem);
} catch (error) {
	console.error(error);
}
// ---------------------------

const collectCoin = document.querySelector('#collect-coin');
const collectGem = document.querySelector('#collect-gem');
const coinsCollected = document.querySelector('#coins-collected');
const gemsCollected = document.querySelector('#gems-collected');
const showScore = document.querySelector('#show-score');

const render = () => {
	try {
		coinsCollected.textContent = coin.getCollectedMessage();
		gemsCollected.textContent = gem.getCollectedMessage();
		showScore.textContent = gameScore.getTotalScore();
	} catch (error) {
		console.error(error);
	}
};

collectCoin.addEventListener('click', () => {
	coin.collect();
	render();
});
collectGem.addEventListener('click', () => {
	gem.collect();
	render();
});
