const prompt = require('prompt-sync')({ sigint: true });

let tinggi = Number(prompt('Masukkan tinggi badan anda (cm): '));
const ideal = (tinggi - 100) * 0.9;

console.log('Berat badan ideal Anda: ' + ideal + ' kg');