import { defaultEquals } from './util/util.mjs';
import { Node } from './models/linked-list-models.mjs';

export default class LinkedList {
	constructor(equalsFn = defaultEquals) {
		this.count = 0;
		this.head = undefined;
		this.equalsFn = equalsFn;
	}
}
