// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc). (SORT & REVERSE)
// Remove any integers greater than 19. (FILTER)
// Multiply each remaining number by 1.5 and then substract 1. (FOREACH)
// Then output (either in the DOM or the console) the sum of all the resulting numbers. (REDUCE)

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort(function(a,b) {return a - b;}).reverse().filter(function(c) {return c <= 19}));


// NOT CORRECT:
// .forEach(function(d,e,f) {return (d * 1.5) - 1})


// function logArrayElements(element, index, array) {
//   console.log('a[' + index + '] = ' + element);
// }

// // Note elision, there is no member at 2 so it isn't visited
// [2, 5, , 9].forEach(logArrayElements);
// // logs:
// // a[0] = 2
// // a[1] = 5
// // a[3] = 9