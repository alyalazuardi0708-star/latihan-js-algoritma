const prompt = require("prompt-sync")({ sigint: true });

const namaKaryawan = prompt("Masukkan nama karyawan: ");
const tipeGolongan = prompt("Masukkan golongan (A/B/C/D): ").toUpperCase();
const totalJamKerja = Number(prompt("Masukkan jumlah jam kerja: "));

let tarifPerJam = 0;

switch (tipeGolongan) {
    case "A":
        tarifPerJam = 4000;
        break;
    case "B":
        tarifPerJam = 5000;
        break;
    case "C":
        tarifPerJam = 6000;
        break;
    case "D":
        tarifPerJam = 7500;
        break;
    default:
        console.log("Golongan tidak valid");
        break;
}

let totalGaji = 0;

if (totalJamKerja > 48) {
    const jamLembur = totalJamKerja - 48;
    totalGaji = (48 * tarifPerJam) + (jamLembur * 3000);
} else {
    totalGaji = totalJamKerja * tarifPerJam;
}

console.log("Nama Karyawan : " + namaKaryawan);
console.log("Golongan       : " + tipeGolongan);
console.log("Gaji Mingguan  : Rp" + totalGaji);