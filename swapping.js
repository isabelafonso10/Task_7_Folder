// User input
let originalNum = prompt("Please enter a number of at least 3 digit");
if (originalNum === null || originalNum.length < 3) { 
    alert(" Please enter a number with 3 digits");
}

// Initialising newNum as an empty string  *BEFORE* the loop
let newNum = "";


for (let i = 0; i <originalNum.length; i++) {
    let digit;
    if (i===1) {
        digit = originalNum[2];
    } else if (i === 2) {
        digit = originalNum[1];
    } else {
        digit = originalNum[i];
    }
    newNum += digit;
     }
       
console.log("original number", originalNum);
console.log("Swapped number", newNum);