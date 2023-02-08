function fiveMoreOdd(numbers) {
    let updated = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            updated.push(numbers[i] + 5);
        } else {
            updated.push(numbers[i]);
        }
    }
    return updated;
}

console.log(fiveMoreOdd([1,2,3,4,5,6,7,8,9]))