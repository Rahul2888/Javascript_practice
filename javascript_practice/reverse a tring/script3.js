//reverse a string using javascript
const input = prompt("Enter a word to  reverse:");
function reverseString(str){
    return str.split('').reverse().join('');
}
const reversed =reverseString(input);
console.log("Reversed string is:",reversed);