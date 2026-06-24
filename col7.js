const prompt = require('prompt-syn')({sigint: true});

let duit = Number(prompt('Masukkan Nilai Uang: '));
let sisa = duit

let rp1000 = Math.floor(sisa / 1000);
sisa = sisa % 1000;
let rp500 = Math.floor(sisa / 500);
sisa = sisa % 500;
let rp100 = Math.floor(sisa / 100);
sisa = sisa % 100;
let rp50 = Math.floor(sisa / 50);
sisa = sisa % 50;
let rp25 = Math.floor(sisa / 25);
sisa = sisa % 25;

console.log(`
    Pecahan Rp1000: ${rp1000}
    Pecahan Rp500: ${rp500}
    Pecahan Rp100: ${rp100}
    Pecahan Rp50: ${rp50}
    Pecahan Rp25: ${rp25}
    `)