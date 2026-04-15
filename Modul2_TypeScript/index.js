"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nama = "Budi";
let umur = 17;
let aktif = true;
console.log(nama, umur, aktif);
function log(username, password) {
    return username === "admin" && password === "admin";
}
console.log(log("admin", "admin"));
const use = {
    id: 1,
    nama: "Sinta",
    role: "admin"
};
console.log(use);
const buku1 = {
    id: 1,
    judul: "Belajar Backend"
};
console.log(buku1);
const siswa = {
    id: 20034,
    nama: "Tapir",
    kelas: "XI9"
};
console.log(siswa);
function Umur(hitungUmur) {
    const tahun = new Date().getFullYear();
    const age = tahun - hitungUmur;
    return age;
}
console.log(Umur(2009));
//# sourceMappingURL=index.js.map