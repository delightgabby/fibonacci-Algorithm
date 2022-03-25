const fibonacci = (n) =>{
    if(n < 2){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(2))



// Memorized Fibonacci
// it is going to take two parameter


const memoFib = (index, array) =>{
    array = array || []
    if(array[index]){
        array[index]
    }else{
        if(index < 2){
            return 1
        }else{
            array[index] = memoFib(index - 1, array) + memoFib(index - 2, array)
        } 
    }

    return array[index]
}

// console.log("fibonacci:", fibonacci(40))

// this is the memorized fibonacci
console.log("memoFib:", memoFib(1000)) 