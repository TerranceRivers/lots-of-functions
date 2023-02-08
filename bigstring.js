function bigString(x,y){
if (x.length > y.length){
    return(x)
}else if (y.length > x.length){
    return (y)
}
return "Equal in size"
}

console.log(bigString("cat","dog"))
console.log(bigString("terrence ","trenton"))
console.log(bigString("terrence ","trentonrivers"))

