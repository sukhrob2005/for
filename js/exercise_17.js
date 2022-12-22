// Tubson

var a = +prompt("Son kiriting:");
var total = 0;

for (i = 0; i <= a; i++) {
  if (a % i == 0) {
    total++;
  }
}
if (total > 2) {
  console.log(`${a} tubson emas`);
} else {
  console.log(`${a} tubson`);
}
