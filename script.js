let arr = [4,8,2,11,6,7,10]
//index--> 1  2  3   4  5  6   7

// Dummy array for testing
const numbers = [4, 8, 2, 11, 6, 7, 10];

// 1. Find the maximum number - Function Declaration
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 2. Calculate the sum of all elements - Arrow Function
const calculateSum = (arr) => arr.reduce((total, num) => total + num, 0);

// 3. Count the odd numbers - Anonymous Function (stored in a variable)
const countOdd = function (arr) {
  let count = 0;
  for (const num of arr) {
    if (num % 2 !== 0) {
      count++;
    }
  }
  return count;
};


console.log("Array:", arr);
console.log("Maximum number:", findMax(arr));
console.log("Sum of all elements:", calculateSum(arr));
console.log("Count of odd numbers:", countOdd(arr));