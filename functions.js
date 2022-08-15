// IV. Functions


// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?

// function printGreeting(name){
// return `Hello there, `  + name + `!`
// }
// console.log(printGreeting('Slimer'));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.


// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// function printCool(name){
//  return name + ` is cool`;
// };
// console.log(printCool('Captain Reynolds'))
//  => "Captain Reynolds is cool";

//////////////////////////////////
// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.


//  function calculateCube(num) { 
//   return num *= num *= num;
//  };
// console.log(calculateCube(5));
// => 125



/////////////////////////////////////////
// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.


// function isVowel(char){
//     char = char.toLowerCase();
//     return char === "a" || char === "e" || char === "i" || char === "o" ||char === "u" || false;      
// };

// console.log(isVowel("a"));
// => true


///////////////////////////////////////////
// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// function getTwoLengths(string, string2){
//     string = string.length;
//     string2 = string2.length;
//     return [string, string2];
// }

// console.log(getTwoLengths("Hank", "Hippopopalous"));

// => [4, 13]



///////////////////////////////////////////////
// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// function getMultipleLengths(strings){
// for (let i= 0; i<strings.length; i++ ) {
//     strings[i] = strings[i].length
//     }
//     return strings
// }   

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// => [5, 4, 2, 2, 4]


///////////////////////////
// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.


// function maxOfThree(num1, num2, num3){
//     let max = (0);
//     if(num1 > num2)
//     {
//         max = num1;
//     } else {
//         max = num2;
//     }
//     if (num3 > max)     

// max = num3;

// return max;
// }
// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

//////////////////////////////////////////
// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord(strings) {
    let longestWord = '';
    let currentNum = 0;
    for (let i=0; i<strings.length; i++ ) {
        let current = strings[i].length;
            if (current > currentNum){
                longestWord = strings[i];
                currentNum = strings[i].length;
            }
    }
    return longestWord
};

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


