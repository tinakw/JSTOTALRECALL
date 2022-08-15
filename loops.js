// . Loops
// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)
// ---------------------------------------------------------------------------------------------------

// A. The Basics
// 
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let i = 0; i <= 10; i++){
    //     console.log(i)
// Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i = 10; i <= 400; i++){
//          console.log(i)
// };

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i <= 4000; i += 3){
//     console.log(i)
// };
// 
//-----------------------------------------------------------------------------------------------------
// B. Get Even

// Print out the numbers that are within the range of 1 - 100

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let i = 1; i <= 100; i++){
//     console.log(i); 
//     if (i % 2 === 0){
//         console.log(`${i} <-- is an even number`);
//     }
// }
// -----------------------------------------------------------------------------------------------------
// (Left off on Aug 9)
// C. Give me Five

// 1 - For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// Example Output:

// I found a 5. High five!
// I found a 10. High five!

// for (let i = 0; i <= 100; i++){
//     if( i % 5 === 0){
//         console.log(`I found a ${i}. High five!`)
//     }
// }


// 2 - Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

// for (let i = 0; i <= 100; i++){
//         if( i % 5 === 0){
//             console.log(`I found a ${i}. High five!`)
//          } else if (i % 3 === 0){ //lets revisit
//             console.log(`I found a ${i}. Three is a crowd`)
//         } 
  //  }


// 3 - For numbers divisible by both three and five, be sure your code prints both messages

// for (let i = 0; i <= 100; i++){
//         if( i % 15 === 0){
//             console.log(`I found a ${i}. High five! Three is a crowd.`)
    
//             }
//         }


//----------------------------------------------------------------------
// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// const bank_account = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < bank_account.length; i++) {
//     sum += bank_account[i];
// }
// console.log(sum);


// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
 // Solution Options -- use for loop || array ?? 

// for loop  

let sum = 0; // delare variable and initialize 

for (let i = 0; i <= 100; i++){  // declare iterator and initialize; stopping condition; iteration statement
    sum += i*2; // define function
};
console.log(sum);// call the function