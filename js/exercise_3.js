// Toq sonlar yig'indisi

var a = +prompt("son kiriting:");
var total = 0;

for (i = 0; i <= a; i++) {
  if (i % 2 != 0) {
    total = total + i;
  }
}
console.log(total);
