function everyDivisible(n) {
    for (let i = 1; i <= 100; i++) {
      if (i % n === 0) {
        console.log(i);
      }
    }
  }

  console.log(everyDivisible(10))