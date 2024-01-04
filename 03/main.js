// From the given 3 numbers , find the smallest and largest, and check
// are they prime.
// Example :
// Number = 13;
// Number2 = 15;
// Number3 = 20;
// Smallest - 13 , Largest-20
// The smallest number 13 is prime , The largest number 20 is not prime.

let arrayOfNumbers = [13, 15, 20];

function areSmallestAndBiggestPrime(array) {
    let smallest = arrayOfNumbers[0];
    let biggest = arrayOfNumbers[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    console.log(`Smallest is ${smallest}.`)

    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggest) {
            biggest = array[i];
        }
    }
    console.log(`Biggest is ${biggest}.`)

    let primeOfSmallest = 0;
    for (let i = 0; i < smallest; i++) {
        if (smallest % i === 0) {
            primeOfSmallest++;
        }
    }

    if (primeOfSmallest <= 3) {
        console.log(`The smallest number ${smallest} is prime`);
    } else {
        console.log(`The smallest number ${smallest} is not prime`);
    }

    let primeOfBiggest = 0;
    for (let i = 0; i < biggest; i++) {
        if (biggest % i === 0) {
            primeOfBiggest++;
        }
    }

    if (primeOfBiggest <= 3) {
        console.log(`The biggest number ${biggest} is prime`);
    } else {
        console.log(`The biggest number ${biggest} is not prime`);
    }
}

areSmallestAndBiggestPrime(arrayOfNumbers);