//Sum of Array Elements

const input =prompt("Enter numbers separated by commas(e.g. 1,2,3,4):");
const numbers = input.split(',').map(num => parseFloat(num));
let sum = 0;
for(let i = 0;i< numbers.length;i++){
    sum += numbers[i];
}
console.log("The sum is:",sum);