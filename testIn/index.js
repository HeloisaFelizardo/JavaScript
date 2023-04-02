const x = 6 % 2;
const y = x ? 'One' : 'two';

console.log(x);

////////////////////////////////////////////////////

let cat = { type: 'tiger', size: 'large' };
let json = JSON.stringify(cat, ['type']);
console.log(json);

const obj = {
	a: 1,
	b: 2,
	c: 3,
};

const obj2 = {
	...obj,
	a: 0,
};

console.log(obj2.a, obj2.b);

//////////////////////////////////////////////////////

let animals = ['jaguar', 'eagle'];
animals.pop();

console.log(animals.pop());

value1 = 2;
value2 = 4;

value1 *= value1 + (value2 * value2) / value1;

console.log(value1);

var thing;

let func = (str = 'no arg') => {
	console.log(str);
};

func(thing);
func(null);

//////////////////////////////////////////////////////////////////

let otherAnimals = [{ type: 'lion' }, 'tiger'];
let clones = otherAnimals.slice();

clones[0].type = 'bear';
clones[1] = 'sheep';

console.log(otherAnimals[0].type, clones[0].type);

console.log(otherAnimals[1], clones[1]);

//////////////////////////////////////////////////////////////////

let bear = {
	sound: 'roar',
	roar() {
		console.log(this.sound);
	},
};

bear.sound = 'grunt';
let bearSound = bear.roar;
bearSound();
