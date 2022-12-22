// a va b sonlar orasida 2 va 3 ga bo'linadiganlar

var a = +prompt("birinchi sonni kiriting:");
var b = +prompt("ikkinchi sonni kiriting:");
var total = 0;

for (i = a; i < b; i++) {
  if (i % 2 == 0 && i % 3 == 0) {
    total++;
  }
}
console.log(total);
