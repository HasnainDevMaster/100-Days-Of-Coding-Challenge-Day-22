"use strict";
// 100 Days Of Coding Challenge!
/** Question 64:
Combine Strings and Numbers: Write a function that merges a piece of text with a number.
For example, if provided with Age: and 30, it should give back Age: 30.*/
//--------------------------------------------------------------------------------------
/**
 * Combines a piece of text with a number.
 * @param text - The text to be combined.
 * @param num - The number to be combined.
 * @returns The combined string.
 */
// Function combinedTextAndNumber takes two arguments: text and num
function combineTextAndNumber(text, num) {
    return `${text} ${num}`;
}
// Calling the function with "Age:" and 30 as arguments
console.log("Combined Strings and Numbers:", combineTextAndNumber("Age:", 30)); // Output: "Age: 30"
