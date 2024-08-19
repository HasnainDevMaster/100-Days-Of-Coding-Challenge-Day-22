// 100 Days Of Coding Challenge!

/** Question 66:
Logical AND Verification: Create a function that checks two boolean (true or false) values.
It should only say `true` if both are true, using the `&&` operator.
For instance, `checkBothTrue(true, false)` should be `false`.*/

//-----------------------------------------------------------------------------------------

/**
 * Checks if both boolean values are true.
 * @param val1 - The first boolean value.
 * @param val2 - The second boolean value.
 * @returns True if both values are true, otherwise false.
 */
// Function checks if both boolean values are true
function checkBothTrue(val1: boolean, val2: boolean): boolean {
    return val1 && val2;
}

// Calling the function with different boolean values
console.log("Logical '&&' Verification:", checkBothTrue(true, false)); // Output: false
