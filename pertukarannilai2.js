const prompt = require("prompt-sync")({ sigint: true });

let hari1 = Number(prompt("Masukkan tanggal pertama: "));
let bulan1 = Number(prompt("Masukkan bulan pertama: "));
let tahun1 = Number(prompt("Masukkan tahun pertama: "));

let hari2 = Number(prompt("Masukkan tanggal kedua: "));
let bulan2 = Number(prompt("Masukkan bulan Kedua: "));
let tahun2 = Number(prompt("Masukkan tahun Kedua: "));

let total1 = tahun1 * 365 + bulan1 * 30 + hari1;
let total2 = tahun2 * 365 + bulan2 * 30 + hari2;

let selisih = Math.abs(total2 - total1);

let tahun = Math.floor(selisih / 365);
let bulan = Math.floor((selisih % 365) / 30);
let hari = (selisih % 365) % 30;

console.log("Selisih:");
console.log(tahun + " tahun");
console.log(bulan + " bulan");
console.log(hari + " hari");