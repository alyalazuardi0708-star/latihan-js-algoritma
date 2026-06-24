const prompt = require('prompt-sync')({sigint: true});

let jarakCm = Number(prompt('Masukkan jarak tempuh anda: '));
let sisajarak = jarakCm;

let km = Math.floor(sisajarak / 100000);
sisa = sisajarak % 100000;
let m = Math.floor(sisajarak / 100);
sisa = sisajarak % 100;
let cm = sisajarak

console.log(
    `${km} km + ${m} m + ${cm} cm`
)