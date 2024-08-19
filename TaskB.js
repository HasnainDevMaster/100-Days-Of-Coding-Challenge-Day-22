"use strict";
// 100 Days Of Coding Challenge!
/** Question 65:
Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the `%` sign.
For example, `remainder(5, 2)` should give `1`.*/
//---------------------------------------------------------------------------------------------------------------------------
/**
 * Calculates the remainder of the division of two numbers.
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The remainder.
 */
// Function to calculate the remainder
function remainder(a, b) {
    return a % b;
}
// Calling the function with sample inputs
console.log("Determine the Remainder:", remainder(5, 2)); // Output: 1
