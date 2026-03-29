// Write a program to find the longest word in a given string.

function longestWord(str) {
    let words = str.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("Welcome to the Javascript Programming")); 