//  Word counter App

const input = prompt("Enter a sentence:");

/*prompt() displays an input box to the user.

The user's sentence is stored in the variable input as a string.*/

const trimmed = input.trim();

const charCount = trimmed.length;

const wordcount = trimmed === '' ? 0 : trimmed.split(/\s+/).length;
let vowelcount = 0;
for (let char of trimmed.toLowerCase()){
    if ('aeiou' .includes(char)){
        vowelCount++;
    }
}