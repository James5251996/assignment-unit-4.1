console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());



// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  let myName = 'Sup ' + name;
  return myName;
};
// Remember to call the function to test
console.log(helloName('Frank'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
};
console.log('The total of thsese 2 numbers are', addNumbers(17, 7));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
 return num1*num2*num3;
};
console.log('The total is this multiplication is', multiplyThree(2,3,8));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else if ( number <= 0 )
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
 return array.slice(-1);
};
console.log(getLast([1,2,6,5,8]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let arrayIndex = 0; arrayIndex<array.length; arrayIndex++) {
    if (array[arrayIndex] === value) {
       return true; 
    } 
  } return false;
};
console.log(find('cookie', ['pie', 'cookie']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
   let firstLetter = string[0]
  if (letter === firstLetter) {
    return true;
  }; return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'blueberries') );

// 9. Function to return the sum of all numbers in an array
const sumAll = (array) => {
  let sum = 0
  for (let sumIndex = 0; sumIndex<array.length; sumIndex++) {
     sum += array[sumIndex];
  }
  // TODO: loop to add items
  return sum;
}
console.log('the sum of this array is', sumAll([7, 10, 4, 2]))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let positiveArray = [1,3,4,-6,-2,1];
const newArray = positiveArray.filter( numbers => {
  return numbers > 0
});
console.log(newArray); 


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// You are given three positive integers t, a, b. Your task is to establish whether (t^a - 1)/(t^b -1) is an integer with less than 100 digits.
// Return the result of (t^a - 1)/(t^b -1) in string format, if the result is an integer with less than 100 digits. Otherwise, return "Not an integer with less than 100 digits".
let sum = 0
function math (t,a,b) {
  sum = (t^a - 1)/(t^b - 1);
  let sumString = sum.toString().length;
  if (sumString < 100) {
    console.log(sumString);
  } else if (sumString > 100) {
    console.log('Not an integer with less than 100 digits');
  } 
}
math(2,3,2);

