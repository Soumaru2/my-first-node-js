'use strict';
const numder = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= numder; i++) {
    sum = sum + i;
}
console.log(sum);