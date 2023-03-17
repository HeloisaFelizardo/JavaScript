import { getBoxWidth } from './measure.js';

const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');

const box1Value = getComputedStyle(box1).width;
const box2Value = getComputedStyle(box2).width;

console.log('First box width', getBoxWidth(box1Value));
console.log('Second box width', getBoxWidth(box2Value));
