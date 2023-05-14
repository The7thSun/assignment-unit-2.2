// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// youve declared your variable and given it a name of "name" and a value of "dane"
// conditional states if name is true to be mary then console log Hi mary
// else console log how do you do
//hence the first condition isnt true it goes to the next one. so the console will log "how do you do"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// youve declared two variables. one with a value and one without
// conditional states if code is true to be 123 then secrets new value will be "super" and codes will be "code *2"
// hence this is true the first conditional will apply 
//the next conditonal states if code is greater than 250 secrets value will become "duper" hence this isnt true it wont apply
//the only thing in the console will be secret since the log is seperate from the code blocks

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// you have three variables declared all with names and values 
//conditional states if isStudent is exactly "true" and zip is greater than 80000 console log "youre a student on the west coast"
// else if isStudent is true to be false or age is less than 30 console log "what are your hobbies" 
//this will log since age is less than 30
//else if isStudent is exact to true console log "welcome to prime" this log will overide the other since its next in the code block
//else if isStudent isnt exact to true console log "how about the weather" this will not log since isStudent is true

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//FIX colorOne and colorTwo's values are mixed and in the wrong places 
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
//FIX you want to set both values to purple with this conditional but you only have it so that colorOne will change and not the other 
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//FIX you say we started with two varibales but its only one while the other is a constant
/*
let temp = 40;
const time = 4;
//FIX you want check both of these variabls with the "&&" operator instead. Here you used the or operator which will check one or the other not both
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.
//FIX these arent two variables as one of them is a constant
/*
let age = 21;
const minAge = 21;
//FIX You said you want to check if age is greater than or equal to minAge, but here youre checking if minAge is less than or equal to age
// it should look like this if(age >= minAge)
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

