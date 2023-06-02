// do NOT remove the 'export default'
export default class GameScore {
	// TODO: constructor, addCollectible, and getTotalScore
	constructor() {
		this.collectibles = [];
	}
	addCollectible(collectible) {
		this.collectibles.push(collectible);
	}
	getTotalScore() {
		return this.collectibles.reduce(
			(total, current) => total + current.getScore(),
			0
		);
	}
}
