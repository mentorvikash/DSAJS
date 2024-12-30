/**
 * Generates a Fibonacci sequence array of length n
 * @param {number} n - The length of the Fibonacci sequence to generate
 * @returns {number[]|undefined} Array containing the Fibonacci sequence or undefined if invalid input
 */
const fibArray = (n) => {
    if (typeof n !== 'number' || n < 1) {
        console.error("Please provide a positive number greater than 0");
        return;
    }

    if (n === 1) {
        return [0];
    }

    if (n === 2) {
        return [0, 1];
    }

    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

// Test cases
console.log(fibArray(1));  // [0]
console.log(fibArray(2));  // [0, 1]
console.log(fibArray(5));  // [0, 1, 1, 2, 3]
console.log(fibArray(8));  // [0, 1, 1, 2, 3, 5, 8, 13]

const factorialOfNumber = (n) => {
    if (n < 0) {
        console.log("value of n can not be negative")
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorialOfNumber(0)) // 1 
console.log(factorialOfNumber(1)) // 1
console.log(factorialOfNumber(2)) // 2
console.log(factorialOfNumber(3)) // 6
console.log(factorialOfNumber(4)) // 24
console.log(factorialOfNumber(5)) // 120


