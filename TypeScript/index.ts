let nama: string = "Budi";
let umur: number = 17;
let aktif: boolean = true;

console.log(nama, umur, aktif);

function log(username: string, password: string):
boolean {
return username === "admin" && password === "admin";
}
console.log(log("admin", "admin"));

interface User {
    id: number;
    nama: string;
    role: string;
}
const use: User = {
    id: 1,
    nama: "Sinta",
    role: "admin"
};
console.log(use);

interface Buku {
    id: number;
    judul: string;
    penulis?: string;
}
const buku1: Buku = {
    id: 1,
    judul: "Belajar Backend"
};
console.log(buku1);

interface Siswa {
    id: number;
    nama: string;
    kelas: string;
}
const siswa: Siswa = {
    id: 20034,
    nama: "Tapir",
    kelas: "XI9"
};
console.log(siswa);

function Umur(hitungUmur: number) : number {
    const tahun = new Date().getFullYear();
    const age = tahun - hitungUmur;

    return age;
}
console.log(Umur(2009));