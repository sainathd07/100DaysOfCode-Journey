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



