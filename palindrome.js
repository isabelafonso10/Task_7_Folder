// User input

 let word = prompt("Please enter a word");
 function isPalindrome(word) { let l = word.length; 
for (let i = 0; i < l / 2; i++) { 
    if (word.charAt(i) !== word.charAt(l - 1 - i)) { return false; } 
} return true; 
} if (isPalindrome("")) { 
    document.write("The word is a palindrome"); 
} else { document.write("The word is NOT a palindrome");
}