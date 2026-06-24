const prompt = require("prompt-sync")({ sigint: true });

let jam = Number(prompt("Jam: "));
let menit = Number(prompt("Menit: "));
let detik = Number(prompt("Detik: "));

detik = detik + 1;

if (detik == 60) {
    detik = 0;
    menit = menit + 1;
}

if (menit == 60) {
    menit = 0;
    jam = jam + 1;
}

if (jam == 24) {
    jam = 0;
}

console.log("waktu sesudah 1 detik:");
console.log(jam + ":" + menit + ":" + detik);