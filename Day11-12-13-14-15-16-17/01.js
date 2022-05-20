// console.log("Hello World"); //printing Hello World on console
// console.log('Hello World'); //printing Hello World on console
// console.log(`Hello World`); //printing Hello World on console

// "use strict"; //helps to minimise errors

// const pi = 3.14; //const value cannot be changed

// console.log(typeof 13); //tells the type of datatype
// console.log(typeof "harry"); //tells the type of datatype

// let age = 21;
// let firstName = "Sainath";

// let aboutMe = "my name is " + firstName + " and my age is" + age //This way of writing becomes tedious sometimes, you can simply rewrite this code of line in simple terms as written in line no.17

// let aboutMe = `my name is ${firstName} and my age is ${age}`
// console.log(aboutMe)

// let num1 = "7";
// let num2 = 7
// console.log(num1 == num2); //checks only value and ignores datatype
// console.log(num1 === num2); //checks both value and datatype
// console.log(num1 != num2) //checks only value and ignores datatype
// console.log(num1 !== num2) //checks both value and datatype

//ternary operator / conditional operator
// let age = 3;
// let drink = age >= 5 ? "milk" : "coffee";
// console.log(drink);

//let inputValue = prompt("Enter a input"); //Prompt takes a input on a browser with a pop up. Remember that prompt only takes input in string.If you want to give number as input then convert the datatype to number(see below code)
//let inputValue = +prompt("Enter a input"); //taking the input as number

// let fruits = ["apple", "mango", "grapes"];
// console.log(Array.isArray(fruits)); //to check if fruits is an array or not

// fruits.push("banana"); //adds banana at end of the fruits
// fruits.pop(); //removes last item from the fruits
// let poppedFruit = fruits.pop(); //pop removes and also returns the removes item
// console.log(poppedFruit);

// fruits.unshift("banana"); //adds banana in the starting of fruits
// fruits.shift(); //removes the starting item of the fruits and also returns it same as pop

//pop and push are faster than shift and unshift

// let array1 = ["item1", "item2"];

//cloning array
// let array2 = array1.slice(0); //clones array1 (it is faster)
// let array2 = [].concat(array1); //clones array1
// new way
//spread operator
// let array2 = [...array1]; //new way of cloning (it is used more)

// array1.push("item3");

// console.log(array1 === array2)
// console.log(array1);
// console.log(array2);

// let array2 = array1.slice(0).concat(["item3","item4"]); //clones array1 and adds item3 and item4
// let array2 = [].concat(array1,["item3","item4"]); //clones array1 and adds item3 and item4
// let array2 = [...array1, "item3","item4"]; //clones array1 and adds item3 and item4

// for of loop in array

// const fruits = ["fruit1", "fruit2", "fruit3"];

// for(let fruit of fruits){
//     console.log(fruit);
// }

// for in loop in array

// const fruits = ["fruit1", "fruit2", "fruit3"];

// for(let fruit in fruits){
//     console.log(fruit); //gives index
// if you want items then write console.log(fruits[fruit]);
// }

// Array Destructuring
// const array1 = ["value1", "value2"];

// let [var1, var2] = array1; //assigning array items to var1 and var2
// console.log(var1);
// console.log(var2); 

//object Destructuring
// const band = {
//     bandName: "Sainath",
//     famousSong: "To heaven",
// };

// const { bandName, famousSong} = band; //shortcut to destructure band
// console.log(bandName);

//objects inside array
// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]
// for(let user of users){
//     console.log(user.firstName);
// } // accessing array elements

// Function related practise
// function isEvenOrOdd(num1){
//     if(num1%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// };
// let i = isEvenOrOdd(7);
// console.log(i);

// function outputFirst(stringg){
//     return stringg[0];
// };
// console.log(outputFirst("sainath"));

// function isPresent(arr, target){
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] === target){
//             return i;
//         }
//     };
//     return -1;
// };
// const arry = [5, 85, 69, 54, 8, 6, 2];
// console.log(isPresent(arry, 56));

// This is function expression
// const newFunction = function(){
//     console.log("This is function expression");
// };
// newFunction();

// This is arrow function
// const newFunction = () => {
//     console.log("This is arrow function");
// };
// newFunction();

// In arrow function, if the parameter is only one then you can remove paranthesis
// const newFunction = number => {
//     return number+1;
// };
// console.log(newFunction(5));

// short form of writing arrow function

// const isEven = number => number%2 === 0;
// console.log(isEven(4));

// function inside function

// function myTest(){
//     console.log("first line");

//     function insideMyTest(){
//         console.log("inside my test");
//     };

//     insideMyTest();
// };
// myTest();

// let and const are block scope
// var is function scope

//default parameters

// function addTwo(a, b){
//     if(typeof b === "undefined"){
//         b = 1;
//     };
//     return a+b;
// };
// console.log(addTwo(4)); // if we are passing only one parameter and want second parameter value to be something deafault like 1 or 0 then we write code as written in line number 180

//new method
// function addTwo(a, b=1){
//     return a+b;
// };
// console.log(addTwo(4));

// rest parameters
// function myFunc(a, b, ...c){ // all remaining values will go into c parameter
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
    // console.log(`c is`, c); // to print array
// };
// myFunc(5, 5, 8, 56, 8, 2);

// Example problem

// function addAll(a, ...b){
//     let sum = 0;
//     for(let i=0;i<b.length;i++){
//         sum += b[i];
//     };
//     return a + sum;
// };
// console.log(addAll(6, 5, 8, 25, 6, 5, 4, 2, 7));

// array methods

//for each
// const numbers = [4, 8, 6, 5];

// function myFunc(number, index){
//     console.log(`number is ${number} and index is ${index}`);
// };

// numbers.forEach(myFunc); //for each passes first item as first parameter and its index as second parameter

// you can also define a function inside for each
// const numbers = [4, 8, 6, 5];
// numbers.forEach(function(number, index){ // we defined a anonymous function here(without name)
//     console.log(`number is ${number} and index is ${index}`);
// });

// we can ignore index as parameter in forEach if we want
// const numbers = [4, 8, 6, 5];
// numbers.forEach(function(number){
//     console.log(number*2);
// });

// Real time example

// const users = [
//     {firstName : "mohit", age : 21},
//     {firstName : "harish", age : 26},
//     {firstName : "sainath", age : 25},
//     {firstName : "mohan", age : 22},
// ];
// users.forEach(function(user){
//     console.log(user.firstName);
// });

// map method
// const numbers = [5, 6, 2, 7, 3];

// const square =  function(number){
//     return number * number;
// };
// const squareNumber = numbers.map(square); //map returns items as a array
// console.log(squareNumber);

// filter method

// const numbers = [5, 1, 2, 4, 8, 6];

// const evenNum = function(number){
//     return number % 2==0;
// };
// console.log(numbers.filter(evenNum));

//reduce method
// aim : sum of all the numbers in array
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// });
// console.log(sum);

//default initial value

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100); //we have set intial value to 100 here, accumulator starts from 100 here.
// console.log(sum);

// example

// aim : sum of all prices

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "TV", price: 15000},
// ];

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price
// }, 0);

// console.log(totalAmount);

// sort method

// const userNames = ["ashish", "mohit", "hitesh", "suraj", "aabc", "B", "ABCD"];

// userNames.sort(); // sort method sorts acc. to the ascii values
// console.log(userNames);

// sorting numbers

// const numbers = [5, 9, 45, 400, 3000, 1200];
// numbers.sort((a, b)=>{
//     return a-b; //ascending order
//     //return b-a; //descending order
// }); // we use this method to sort numbers because sort method sorts acc. to ascii method , we do get the desired output regarding numbers
// console.log(numbers);

// another example

// const products = [
//     {productId : 1, produceName: "p1", price: 300},
//     {productId : 2, produceName: "p2", price: 3000},
//     {productId : 3, produceName: "p3", price: 200},
//     {productId : 4, produceName: "p4", price: 8000},
//     {productId : 5, produceName: "p5", price: 500},
// ];

// const lowToHigh = products.slice(0).sort((a, b)=>{ //cloning array using slice
//     return a.price-b.price;
// });

// const highToLow = products.slice(0).sort((a, b)=>{ //cloning array using slice
//     return b.price-a.price;
// });

// console.log(lowToHigh);