const prompt = require("prompt-sync")({ sigint: true });

// Soal 1
console.log("--- Soal 1 ---");
let bil = parseInt(prompt("Masukkan bilangan bulat positif: "));

if (bil % 4 === 0) {
    console.log(bil + " adalah kelipatan 4");
} else {
    console.log(bil + " bukan kelipatan 4");
}

// Soal 2
console.log("\n--- Soal 2 ---");
let total = parseInt(prompt("Masukkan total belanja: "));
let diskon = 0;

if (total > 100000) {
    diskon = total * 0.1; // Contoh diskon 10%
}
let bayar = total - diskon;
console.log("Diskon: " + diskon);
console.log("Total Bayar: " + bayar);

// Soal 3
console.log("\n--- Soal 3 ---");
let a = parseInt(prompt("Masukkan bilangan ke-1: "));
let b = parseInt(prompt("Masukkan bilangan ke-2: "));
let c = parseInt(prompt("Masukkan bilangan ke-3: "));

if (a > b) { let t = a; a = b; b = t; }
if (a > c) { let t = a; a = c; c = t; }
if (b > c) { let t = b; b = c; c = t; }
console.log("Urutan dari kecil ke besar: " + a + ", " + b + ", " + c);

// Soal 4
console.log("\n--- Soal 4 ---");
console.log("Masukkan 3 sisi segitiga (urutkan dari kecil ke besar!)");
let s1 = parseInt(prompt("Sisi a: "));
let s2 = parseInt(prompt("Sisi b: "));
let s3 = parseInt(prompt("Sisi c: "));

let a2_b2 = (s1 * s1) + (s2 * s2);
let c2 = s3 * s3;

if (c2 === a2_b2) {
    console.log("Membentuk Segitiga Siku-siku");
} else if (c2 < a2_b2) {
    console.log("Membentuk Segitiga Lancip");
} else {
    console.log("Membentuk Segitiga Tumpul");
}

// Soal 5a
console.log("\n--- Soal 5a ---");
let char1 = prompt("Masukkan 1 karakter digit (pasti '0'..'9'): ");
let angka1 = Number(char1);
console.log("Hasil konversi 5a: " + angka1);

// Soal 5b
console.log("\n--- Soal 5b ---");
let char2 = prompt("Masukkan 1 karakter bebas: ");
let angka2 = Number(char2);

if (char2 >= '0' && char2 <= '9') {
    console.log("Hasil konversi 5b: " + angka2);
} else {
    console.log("Hasil konversi 5b: -99");
}

// Soal 6
console.log("\n--- Soal 6 ---");
let uang = parseInt(prompt("Masukkan nilai total belanja (rupiah): "));
let sisa = uang % 25;
let bulat = uang - sisa;
console.log("Hasil pembulatan terendah: " + bulat);

// Soal 7a
console.log("\n--- Soal 7a ---");
let n1 = parseInt(prompt("Masukkan angka (1-10): "));
const romawi1 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
if (n1 >= 1 && n1 <= 10) {
    console.log("Angka Romawi: " + romawi1[n1]);
} else {
    console.log("Input di luar rentang 1-10!");
}

// Soal 7b
console.log("\n--- Soal 7b ---");
let n2 = parseInt(prompt("Masukkan angka sembarang positif: "));
let hasilRomawi = "";
const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

for (let i = 0; i < val.length; i++) {
    while (n2 >= val[i]) {
        hasilRomawi += rom[i];
        n2 -= val[i];
    }
}
console.log("Angka Romawi: " + hasilRomawi);

// Soal 8
console.log("\n--- Soal 8 ---");
let pixel = parseInt(prompt("Masukkan nilai hasil operasi pixel: "));

if (pixel > 255) {
    pixel = 255;
} else if (pixel < 0) {
    pixel = 0;
}
console.log("Nilai setelah clipping: " + pixel);

// Soal 9
console.log("\n--- Soal 9 ---");
let bb = parseInt(prompt("Masukkan berat badan aktual (kg): "));
let bbi = parseInt(prompt("Masukkan berat badan ideal (kg): "));
let selisih = bb - bbi;

if (selisih >= -2 && selisih <= 2) {
    console.log("Status: ideal");
} else {
    console.log("Status: tidak ideal");
}