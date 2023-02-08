function bigNumber(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  }
  return "Equal in size";
}

console.log(bigNumber(1,1));
console.log(bigNumber(50,100));
console.log(bigNumber(100,50));
