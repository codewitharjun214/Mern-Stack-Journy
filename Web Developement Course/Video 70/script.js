function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    console.log(arr.slice(1));
    let result = arr.slice(1).reduce((a, b) => a * b, 1); // provide initial value 1
    console.log(result);
    return result;
  }
  
  let a = 3;
  factorial(a);