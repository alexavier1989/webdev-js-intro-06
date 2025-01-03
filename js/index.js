// "use strict"

// // This example loops through numbers 1 to 10 but skips the number 5 and stops the loop when it reaches 8.
// function forLoopExample() {
//     for (let i = 1; i <= 10; i++) {
//         if (i === 5) {
//             continue; // Skip the number 5
//         }
//         if (i === 8) {
//             break; // Stop the loop at 8
//         }
//         console.log(i); // Output: 1 2 3 4 6 7
//     }
// }


// //This example loops through numbers starting at 1. It skips even numbers and stops the loop once it reaches 7.
// function whileLoopExample() {
//     let i = 1;
//     while (i <= 10) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         }
//         if (i === 7) {
//             break;
//         }
//         console.log(i); // Output: 1, 3, 5
//         i++;
//     }
// }


// //This example loops through numbers 1 to 10, skipping multiples of 3.
// function doWhileLoopExample() {
//     let j = 1;
//     do {
//         if (j % 3 === 0) {
//             j++;
//             continue;
//         }
//         console.log(j); // Output: 1, 2, 4, 5, 7, 8, 10
//         j++;
//     } while (j <= 10);
// }