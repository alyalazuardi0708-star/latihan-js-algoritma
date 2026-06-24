const prompt = require('prompt-sync')({sigint: true});

let meter = Number(prompt('Masukkan panjang (meter): '));

let inci = meter / 0.0254;
let kaki = meter / 0.3048;
let yard = meter / 0.9144;

console.log('Hasil Inci =', inci);
console.log('Hasil Kaki =', kaki);
console.log('Hasil Yard =', yard);