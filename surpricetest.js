//question 1//
function reverseArray(arr) {
    // Create a new array to hold the reversed values
    let reversedArr = [];
    
    // Iterate over the original array in reverse order
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    
    return reversedArr;
  }
  let smallArray = [1, 2, 3, 4, 5];
  let reversedSmallArray = reverseArray(smallArray);
  
  console.log(reversedSmallArray); // Output: [5, 4, 3, 2, 1]
  let largeArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let reversedLargeArray = reverseArray(largeArray);
  
  console.log(reversedLargeArray); // Output: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
  
  
  //question 2//
  function filterOutNegatives(arr) {
    // Use the filter method to keep only non-negative numbers
    return arr.filter(num => num >= 0);
  }
  let sampleArray1 = [1, -2, 3, -4, 5];
  let filteredArray1 = filterOutNegatives(sampleArray1);
  
  console.log(filteredArray1); // Output: [1, 3, 5]
  
  
  //question 3//
  function countVowels(str) {
    str = str.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;
    
    for (let char of str) {
        
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
  }
  
  
  console.log(countVowels("Hello")); 
  console.log(countVowels("Testing")); 
  //question 4//
  function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  // Test the function with different strings
  console.log(isPalindrome("kayak")); // true
  console.log(isPalindrome("mom")); // true
  console.log(isPalindrome("radar")); // true
  console.log(isPalindrome("refer")); // true
  console.log(isPalindrome("hello")); // false
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("No 'x' in Nixon")); // true
  
  
  //question 5//
  function isInRange(num1, num2) {
    const isNum1InRange = num1 >= 50 && num1 <= 99;
    const isNum2InRange = num2 >= 50 && num2 <= 99;
    return isNum1InRange || isNum2InRange;
  }
  
  // Test the function with different values
  console.log(isInRange(45, 55)); // true
  console.log(isInRange(50, 49)); // true
  console.log(isInRange(99, 100)); // true
  console.log(isInRange(25, 35)); // false
  console.log(isInRange(60, 90)); // true
  
  
  // question 6//
  
  function minMappedValue(arr, mapFunc) {
    const mappedValues = arr.map(mapFunc);
    return Math.min(...mappedValues);
  }
  
  
  function square(num) {
    return num * num;
  }
  
  
  let arr4 = [1, 2, 3, 4, 5];
  console.log(minMappedValue(arr4, square)); 
  
  // question 7//
  
  
  function fourCopiesOfLastThree(str) {
    if (str.length >= 3) {
        const lastThree = str.slice(-3);
        return lastThree.repeat(4);
    } else {
        return "String length must be 3 and above.";
    }
  }
  
  
  let str5 = "JavaScript";
  console.log(fourCopiesOfLastThree(str5)); 
  
  // question 8//
  
  
  function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle. Angle should be between 0 and 180 degrees.";
    }
  }
  
  console.log(angleType(45));  
  console.log(angleType(90));   
  console.log(angleType(120)); 
  console.log(angleType(180));  
  console.log(angleType(200));
  
  
  
  //question 9//
  
  
  function smallestRoundNumber(value) {
    while (value % 10 !== 0) {
        value++;
    }
    return value;
  }
  
  
  console.log(smallestRoundNumber(590)); 
  console.log(smallestRoundNumber(592));
  
  
  // question 10 //
  
  
  
  function findIndex(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1; 
  }
  
  
  let arr41 = [10, 20, 30, 40, 50];
  console.log(findIndex(arr41, 30));
  console.log(findIndex(arr41, 100));