const isPalindrome = (string) => {
    const arrOfChars = string.split("");
    const reverseString = arrOfChars.reverse().join("");
    const result = reverseString === string;
    return result;
 }
 
 console.log(isPalindrome("abcba")); //true
 console.log(isPalindrome("nope")); //false