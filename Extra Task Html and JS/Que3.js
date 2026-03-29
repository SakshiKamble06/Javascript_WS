// Write a function to remove false value from an array.

function removeFalsy(arr) {
    return arr.filter(Boolean);
}

console.log(removeFalsy([0, 1, false, 2, "", 3, null, undefined, NaN]));
