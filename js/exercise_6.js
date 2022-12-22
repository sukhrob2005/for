// a va b sonlar orasidagi sonlar yig'indisi

var a = +prompt("birinchi sonni kiriting:");
var b = +prompt("ikkinchi sonni kiriting:");
var total = 0;

for (i = a; i < b; i++) {
  total = total + i;
}
console.log(total);
