// Write a function to count the number of words in a sentence .

function countWords(str) {
    let count = 0;
    let words = str.trim().split(" ");

    for (let word of words) {
        if (word !== "") {
            count++;
        }
    }
    return count;
}

console.log(countWords("Hello   world JS")); 
