function arraySummer(arr){
    let sum = 0
    for (i = 0; i < arr.length; i++){
        sum += arr[i]
        
    }return sum
}
console.log(arraySummer([2,1,10,1,1]))
console.log(arraySummer([2,1,10]))
console.log(arraySummer([1,1,1,1]))