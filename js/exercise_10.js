// a va b sonlar orasida musbat sonlar

var a = +prompt("birinchi sonni kiriting:");
var b = +prompt("ikkinchi sonni kiriting:");
var total = 0;

for (i = a; i <= b; i++) {
  if (i > 0) {
    total++;
  }
}
console.log(total);
