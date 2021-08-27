const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// MDN style.,
let filtered = numbers.filter(number => number % 2 === 0); // true stays in the array

/*

// Suggested by lesson:
let filtered = function evenNumbers(number) {
    return number % 2 === 0
}
*/

console.log(filtered)
