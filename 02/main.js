// Check which numbers from 10 to 100 are even and divisible by 3. Print
// with console.log all those that meet these conditions.

for (let i = 10; i <= 100; i++) {
    if(i % 2 === 0 && i % 3 === 0){
        console.log(`The number ${i} meets the contidions.`);
    } else {
        console.log(`The number ${i} doesnt meets the contidions.`);
    }
}