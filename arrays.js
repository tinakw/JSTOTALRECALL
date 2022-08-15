// III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called?
// the things in an array are called elements
// Do Arrays guarantee those things will be in order?
// they are ordered by their index

// What real-life thing could you model with an array?
// Arrays model participants in a class, color of cars, are just a few examples.


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
//  let quotes = ['just do it', 'liv mas', 'read and learn']


// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
//  randomThings[0]
// Change the value of "Hello"to "World"
// randomThings[2] = 'World'
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings)


// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// ourClass[3]
// Change the value of "Github" to "Octocat"
// ourClass[4]= 'Octocat'
// Add a new element, "Cloud City" to the array
// ourClass.push('Cloud City');


// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

// myArray.push('Aegon','Tina' )

// Remove the 5 from the beginning of the array.

// myArray.shift()

// Add the string "Bob Marley"to the beginning of the array.

// myArray.unshift('Bob Marley')

// Remove the string of your choice from the end of the array.

// myArray.pop()

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

// Yes, the array mutated. It reverses the array in place, the first becomes the last and the last becomes the first.  Mutate means to change original Array. 

// ***F. Biggie Smalls
// Create a variable that contains an integer.
//  let int = 101;

// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// if (int < 100){
//      console.log('little number')
//  } else {
//     console.log('big number')
// };

// console.log()s big number if the number is greater than or equal to 100.

///////////////////////////////////////////////////////////////////////////////
// G. Monkey in the Middle
// Write an if ... else if ... else statement:
///////////////////////////////////////////////////////////////////////////////
// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// let int = 4;
// if (int < 5){
//           console.log('little number')
//       } else if (int > 10 ){
//          console.log('big number')
//      } else {
// console.log('monkey')
// }

/////////////////////////////////////////////////////////////////////////////////
// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// // Thom's closet is more complicated. Check out this nested data structure!!

 const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
////////////////////////////////
// // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

//console.log(`Kristyn is rocking that ${kristynsCloset[3]} today!`)// output => Kristyn is rocking that Per Scholas hoodie today!


// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

//kristynsCloset.splice(6,0,'raybans')
//console.log(kristynsCloset) // output ['left shoe','cowboy boots','right sock','Per Scholas hoodie','green pants','yellow knit hat','raybans','marshmallow peeps']


// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

//kristynsCloset.splice(5,1,'stained knit hat')

//console.log(kristynsCloset) //output ['left shoe','cowboy boots','right sock','Per Scholas hoodie','green pants','stained knit hat','raybans','marshmallow peeps']

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

//console.log(thomsCloset[0][0]) //output => grey button-up

// In the same way, access one item from Thom's pants array.

//console.log(thomsCloset[1][2]) // output => PJs

// Access one item from Thom's accessories array.

//console.log(thomsCloset[2][1]) // ouput => wool scarf

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

//console.log(`Thom is looking fierce in a ${thomsCloset[0][2]},${thomsCloset[1][1]} and ${thomsCloset[2][2]}!`) // output => Thom is looking fierce in a light blue button-up,jeans and raybans!


// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

//thomsCloset[1][2] = 'Footie Pajamas';
//console.log(thomsCloset)      //output => [['grey button-up','dark grey button-up','light blue button-up','blue button-up'],
//   [ 'grey jeans', 'jeans', 'Footie Pajamas' ],[ 'wool mittens', 'wool scarf', 'raybans' ] ]