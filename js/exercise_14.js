// Mukammal son

var a = +prompt("Son kiriting:");
var total = 0;

for (i = 1; i < a; i++) {
  if (a % i == 0) {
    total = total + i;
  }
}
if (total == a) {
  console.log(true);
} else {
  console.log(false);
}
