// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc). (SORT & REVERSE)
// Remove any integers greater than 19. (FILTER)
// Multiply each remaining number by 1.5 and then substract 1. (MAP)
// Then output (either in the DOM or the console) the sum of all the resulting numbers. (REDUCE)

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sorted & reversed: 29, 25, 21, 20, 18, 13, 12, 11, 8, 7, 6, 3, 2, 1
// Over 19 removed:   18, 13, 12, 11, 8, 7, 6, 3, 2, 1
// Times 1.5, -1:     26, 18.5, 17, 15.5, 11, 9.5, 8, 3.5, 2, 0.5
// Sum:               111.5

console.log('Sorted, reversed, filtered, mapped & reduded: ',integers.sort(function(a,b) {return a - b;}).reverse().filter(function(c) {return c <= 19;}).map(function(d) {return (d*1.5)-1;}).reduce(function(e,f) {return e+f;}));
