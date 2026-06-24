const prompt = require('prompt-sync')();

let jam = Number(prompt('Masukkan jam kerja: '));
let upah = 0;

if (jam <= 48) {
    upah = jam * 2000;
} else {
    upah = (48 * 2000) + ((jam - 48) * 3000);
}

console.log('Total upah = Rp' + upah);