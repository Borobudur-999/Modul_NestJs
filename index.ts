let nama: string = "Rapi";
let umur: number = 21;
let aktif: boolean = true;

console.log(nama, umur, aktif);

function login(username: string, password: string):
boolean {
return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));