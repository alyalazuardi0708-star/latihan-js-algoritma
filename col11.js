const prompt = require('prompt-sync')({ sigint: true });

let x = Number(prompt('Masukkan nilai x: '));
let y = Number(prompt('Masukkan nilai y: '));

if (x > 0 && y > 0) {
    console.log(' Kuadran I');
} else if (x < 0 && y > 0) {
    console.log('Kuadran II');
} else if (x < 0 && y < 0) {
    console.log('Kuadran III');
} else if (x > 0 && y < 0) {
    console.log('Kuadran IV');
} else {
    console.log('Tidak berada di kuadran manapun');
}