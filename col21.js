const prompt = require("prompt-sync")({ sigint: true });

let bulan = Number(prompt("Masukkan nomor bulan (1-12): "));
let tahun = Number(prompt("Masukkan tahun: "));

let hari;

if (bulan == 1 || bulan == 3 || bulan == 5 || bulan == 7 ||bulan == 8 || bulan == 10 || bulan == 12) {
    hari = 31;
} else if (bulan == 4 || bulan == 6 || bulan == 9 || bulan == 11) {
    hari = 30;
} else if (bulan == 2) {
    if ((tahun % 4 == 0 && tahun % 100 != 0) || tahun % 400 == 0) {
        hari = 29;
    } else {
        hari = 28;
    }
} else {
    console.log("Nomor bulan tidak valid");
}

if (bulan >= 1 && bulan <= 12) {
    console.log("Jumlah hari = " + hari);
}