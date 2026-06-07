// 1. String Reverse
function reverseString(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// console.log(reverseString("Hello")); 



// 2. Palindrome Check

function isPalindrome(str) {
    let left=0;
    let rigth=str.length-1;
  
   while(left<rigth){
        if(str[left]!==str[rigth]) return false;
        left++;
        rigth--;
    }
    return true;
}
// console.log(isPalindrome("racecar")); 
// console.log(isPalindrome("hello")); 


//  3.Remove Duplicate from Array

function removeDuplicate(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result[result.length] = arr[i];
    }
  }

  return result;
}

// console.log(removeDuplicate([1,2,2,3,4,4,5]));

// 4. Find Largest Number
function findLargest(arr) {
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
       

}
    return largest;}
// console.log(findLargest([1, 5, 3, 9, 2])); 

//5. Find Smallest Number
function findSmallest(arr) {
    let smallest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findSmallest([1, 5, 3, 9, 2])); 

// 6. Count Character Occurrences
function countOccurrences(str, char) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) {
            count++;
        }
    }
    return count;
}
// console.log(countOccurrences("Hello", "l"));

// 7. Factorial
function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
// console.log(factorial(5));

// 7.prime Number Check
function isPrime(num) {

    if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log("prime",i)
      return false;
    }
  }

  return true;
}

  


// console.log(isPrime(15));
// console.log(isPrime(10));

// 8. Array Sum
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// console.log(sumArray([1, 2, 3, 4, 5]));

// 9. Find Even Numbers
function findEvenNumbers(arr) {
    let evenNumbers = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 
// 10. Manual Array Length
function arrayLength(arr) {
    let count=0;
    for(let i = 0; i < arr.length; i++) {
        count++;
    }
    return count;
}
// console.log(arrayLength([1, 2, 3, 4, 5]));

// 11. Manual Array Length
function arrayLength(arr){
    let count=0;
    for (let i=0; i<arr.length; i++){
        count++

}

return count;}
// console.log("arrayLength",arrayLength([1,2,3,4,5,7,8,9,10]));
// Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i = i + size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
//  console.log(chunkArray([1, 2, 3, 4, 5,6,7], 2));

// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
function flattenArray(arr) {
    return arr.flat()
}
// console.log(flattenArray([1, [2, 3], [4, 5], 6]));
// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values 
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]))

// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
//  console.log(findMax([1, 5, 3, 9, 2,10]));

// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//  console.log(sumArray([1, 2, 3, 4, 5]));

// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
//  console.log(countChar("Hello", "l"));

// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.

function titleCase(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
// console.log(titleCase('hello world'))
// let str = "hello world";
// console.log(str.split(" ")[0].charAt(0).toUpperCase() + str.split(" ")[0].slice(1));
// console.log( str.split(" ")[0].slice(1));
// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
function isPalindrome(str) {
    let reversed =str.split("").reverse().join("");
    return str === reversed;
}
// console.log(isPalindrome("racecar"));

// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}
//  console.log(countVowels("Hello World"));
// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString('hello'))