
//  Question : Write a program to find the second largest number in a given array.
//   Answer : Write a function which acces the array and find the  second largest number in the array.


function secondLargest(arr1) {
    arr1.sort((a, b) => b - a); 
    return arr[1];
}

console.log(secondLargest([20, 4, 6, 50, 75])); 