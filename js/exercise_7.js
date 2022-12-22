// a va b sonlar orasidagi juft sonlar

var a = +prompt("birinchi sonni kiriting:");
var b = +prompt("ikkinchi sonni kiriting:");
var total = 0;

for (i = a; i < b; i++) {
  if (i % 2 == 0) {
    total++;
  }
}
console.log(total);
