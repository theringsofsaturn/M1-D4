/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const calculateArea = function(height, width){
    let area = height * width
    return area
}

let rectangle = calculateArea(8, 10)

console.log("The rectangle area is:" + rectangle)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum =  function(int1, int2){
    // check if they are the same
    if (int1 === int2){
        // if they are the same, add them up and return the total * 3
        return (int1 + int2) * 3
    }else{
        int1 + int2
        return int1 + int2
    }

}

let crazySumResult1 = crazySum(2, 4)
let crazySumResult2 = crazySum(3, 3 )

console.log("If int1 is equal to int2, the result is " + crazySumResult1, "and if int1 is equal to int2, the result is " + crazySumResult2)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/



const crazyDiff = function(givenNumber, x){
    
    if (givenNumber > x){
        let x = 19
        return Math.abs(givenNumber - x) * 3
        
    }else {
       
        return Math.abs(givenNumber - x)
    }

}

let crazyDiffResult1 = crazyDiff(13, x)
let crazyDiffResult2 = crazyDiff(24, x)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */

const boundary = function(n){
    // if n is within 20 and 100 AND is equal to 400
    if (n > 20 && n < 100 || n === 400) {
       let boundaryBool = true 
    }else{
        boundaryBool = false
    }
}

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

let strivify = function(String){
    let x = "Strive"
    if (x === "Strive"){
        return String
    }else{
        return x.concat(String)
    }
}

let text1 = "School"
let text2 = "Strive"

console.log("If the string is not 'Strive'." + "The text is " + text2)

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

const check3and7 = function(posNum){
    let moduleOperatorResult
    if (Math.sign(posNum) === 1){
        if (posNum % 3 === 0 || posNum % 7 === 0){
            moduleOperatorResult === true
        }else {
            moduleOperatorResult === false
        }
    }
}
   

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

const reverseString = function(str){
    let newString = ""

    for (let i = str.length - 1; i >= 0; i--) { 
        newString += str[i]

        return newString
    }
}

reverseString("hello")


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

function upperFirst(words) {
    let separateWord = words.toLowerCase().split(' ')
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1)
    }
    return separateWord.join(' ')
 }
 console.log(upperFirst("my name is john"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

function cutString(str) {
    return str.substring(1, str.length - 1);
  }
  console.log(cutString('JavaScript'));
  console.log(cutString('JS'));
  console.log(cutString('PHP'));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */


let randomArray = [];
let n = Math.floor(Math.random() * 10);

const giveMeRandom = function (n) {
  for (let i = 0; i < n; i++) {
    nRandom.push(i);
  }
  return nRandom;
};

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/