// 5ga bo'linadigan sonlar yig'indisi

var a = +prompt("son kiriting:");
var total = 0;

for (i = 0; i <= a; i++) {
  if (i % 5 == 0) {
    total = total + i;
  }
}
console.log(total);
