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


// find if prime or not
function isPrime(num) {
    // Check if input is a number and a positive integer
    if (typeof num !== 'number' || num < 2 || !Number.isInteger(num)) {
        return `${num} is not a valid input for checking prime numbers. Please enter a positive integer greater than 1.`;
    }

    // Check if the number is divisible by any number between 2 and its square root
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return `${num} is not a prime number.`;
        }
    }

    return `${num} is a prime number.`;
}

console.log(isPrime(29));  // 29 is a prime number
console.log(isPrime(-3));  // -3 is not a valid input for checking prime numbers. Please enter a positive integer greater than 1.
console.log(isPrime(0));   // 0 is not a valid input for checking prime numbers. Please enter a positive integer greater than 1.
console.log(isPrime(1));   // 1 is not a valid input for checking prime numbers. Please enter a positive integer greater than 1.
console.log(isPrime(4));   // 4 is not a prime number.


function isPrime1(num) {
    if (typeof num !== 'number' || num < 2 || !Number.isInteger(num)) {
        return `${num} is not a valid input for checking prime numbers. Please enter a positive integer greater than 1.`;
    }

    let count = 0
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return "not a prime number"
        }
    }
    return `${num} is a prime number `
}

console.log(isPrime1(-5))

// create a program to the power of 2 of any number

function powerOfTwo(n) {
    let result = n;
    let count = 0;

    if (n < 1) {
        return "enter a valid number"
    }

    while (result > 1) {
        if (result % 2 !== 0) {
            return "the give value do not power of 2"
        } else {
            result = (result / 2);
            count++;
        }
    }

    return `2 to the power ${count} is equal to ${n}`
}

console.log(powerOfTwo(64))  // 


// create a program to the power of 2 of any number

function powerOfTwo(n) {
    let result = n;
    let count = 0;

    if (n < 1) {
        return "enter a valid number"
    }

    while (result > 1) {
        if (result % 2 !== 0) {
            return "the give value do not power of 2"
        } else {
            result = (result / 2);
            count++;
        }
    }

    return `2 to the power ${count} is equal to ${n}`
}

console.log(powerOfTwo(64)) // 2 to the power 6 is equal to 64

// find if given number is a power of 2 number

function powerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0
}


console.log(powerOfTwoBitWise(1)) // true 
console.log(powerOfTwoBitWise(2)) // true
console.log(powerOfTwoBitWise(3)) // false
console.log(powerOfTwoBitWise(4)) // true
console.log(powerOfTwoBitWise(5)) // false



//  nth fibonachi number using recursion

// get the nth fibonachi number

function fibonachiWithRecurstion(n) {

    if (n < 0) {
        return "n shoud be a positive integer"
    }

    if (n < 2) {
        return n
    }

    return fibonachiWithRecurstion(n - 1) + fibonachiWithRecurstion(n - 2)
}

console.log(fibonachiWithRecurstion(1))  // 0
console.log(fibonachiWithRecurstion(2))  // 1
console.log(fibonachiWithRecurstion(3))  // 1
console.log(fibonachiWithRecurstion(4))  // 2
console.log(fibonachiWithRecurstion(10))  // 34
console.log(fibonachiWithRecurstion(15))  // 377 
console.log(fibonachiWithRecurstion(20))  // 4181



