import { waitForCompleteClick, wait } from './helpers.js';

waitForCompleteClick().then(() => {
	console.log('Complete clicked');
});

const waitPromise = wait(4000);
console.log(waitPromise); // pending at this stage

waitPromise.then(() => {
	console.log('waited 1 second');
	console.log(waitPromise); // fulfilled at this stage
});

console.log(waitPromise); // pending at this stage
