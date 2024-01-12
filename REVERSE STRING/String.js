const str = "Hey, Beautiful!";
const reversed = reverseString(str);

console.log(reversed);
/**
 * 
 * @param {string} str 
 */

function reverseString(str) {
    return str.split("").reverse().join("");
}