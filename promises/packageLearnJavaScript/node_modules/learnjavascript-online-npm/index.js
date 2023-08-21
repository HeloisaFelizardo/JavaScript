#!/usr/bin/env node
const string = "the answer is somewhere here";
let n = 0;
[...string].forEach(c => (n += c.charCodeAt(0)));
console.log(n);
