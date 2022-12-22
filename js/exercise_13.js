// Ketma ketlik

var a = +prompt("Birinchi sonni kiriting:");
var b = +prompt("Ikkinchi sonni kiriting:");
var total = 0;
var rounder = 0;

for (i = 0; i < b; i++) {
  rounder = rounder * 10 + a;
  total = total + rounder;
}
console.log(total);
