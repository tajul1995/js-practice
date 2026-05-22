// 1. String Reverse
function reverseString(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("Hello")); 



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
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 


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

console.log(removeDuplicate([1,2,2,3,4,4,5]));

// 4. Find Largest Number
function findLargest(arr) {
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
       

}
    return largest;}
console.log(findLargest([1, 5, 3, 9, 2])); 

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
console.log(countOccurrences("Hello", "l"));

// 7. Factorial
function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

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

  


console.log(isPrime(15));
console.log(isPrime(10));

// 8. Array Sum
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));

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
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 
// 10. Manual Array Length
function arrayLength(arr) {
    let count=0;
    for(let i = 0; i < arr.length; i++) {
        count++;
    }
    return count;
}
console.log(arrayLength([1, 2, 3, 4, 5]));