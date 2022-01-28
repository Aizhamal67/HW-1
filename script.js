//№1
alert("Hello World!");
console.log("My name is Aizhamal");
document.write("<h3>Hi!</h3>");

//№2,3

let names = prompt("ИМЯ:");
let lastName = prompt("Фамиля:");
let mail = prompt("email адрес:");


document.write("<h2>ИМЯ: " + names + "<br></h2>");
document.write("<h2>ФАМИЛЯ: " + lastName + "<br></h2>");
document.write("<h2>e-mail адрес: " + mail + "<br></h2>");

//№4

const SOUVENIR_WEIGHT = 75;
const TRINKET_WEIGHT = 112;

let souvenir = Number(prompt("Введите кол-во сувениров"));
let trinket = Number(prompt("Введите кол-во бездлушек"));

let totalWeight = souvenir * SOUVENIR_WEIGHT + (trinket + TRINKET_WEIGHT);

document.write(`Общий вес составляет: ${totalWeight}г. `);

//№5
let a = Number(prompt("Введите число а"));
let b = Number(prompt("Введите число b"));

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

