// a va b sonlar orasida 3ga bo'linadiganlar

var a = +prompt("birinchi sonni kiriting:");
var b = +prompt("ikkinchi sonni kiriting:");
var total = 0;
var all = 0;

for (i = a; i < b; i++) {
  if (i % 3 == 0) {
    all = all + i;
    total++;
  }
}
console.log(all);
console.log(total);
