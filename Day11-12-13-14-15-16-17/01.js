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

// find method

// const myArray = ["cattle", "cat", "dog", "elephant"];

// function isLength3(string){
//     return string.length === 3;
// };

// const ans = myArray.find(isLength3); //find methid prints only first occurance. Though dog is also of length 3, only cat will be the output beacuse it is occured first
// console.log(ans);

// example

// const users = [
//     {userId : 1, userName: "harsha"},
//     {userId : 2, userName: "harsh"},
//     {userId : 3, userName: "sainath"},
//     {userId : 4, userName: "dhruvi"},
//     {userId : 5, userName: "medha"},
// ];

// const myUser = users.find((user)=>user.userId===3);
// console.log(myUser);

// every method

//check if all elements are even

// const numbers = [2,4,6,8,10];

// const ans = numbers.every((number)=>number%2===0); //callback funtion returns a boolean and every method also returns a boolean.

// console.log(ans); //output will be true because all are even

// what if one element id odd?

// const numbers = [2,4,5,8,10];

// const ans = numbers.every((number)=>number%2===0);

// console.log(ans); //output will be false because one element is odd

// example

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "TV", price: 15000},
// ];

// // check if every product price is less than 30000

// const ans = userCart.every((cartItem)=>cartItem.price<30000);
// console.log(ans);

// some method

// const numbers = [3, 5, 8, 9];

// // check if any number is even?

// const ans = numbers.some((number)=>number%2==0);
// console.log(ans); //returns true i.e, a number is even

// example

// check if any products price is more than 100000
// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "TV", price: 15000},
//     {productId: 4, productName: "macbook", price: 250000},
// ];

// const ans = userCart.some((cartItem)=>cartItem.price>100000);
// console.log(ans);


// fill method
// value, start, end

// const myArray = new Array(10).fill(-1); // here we are creating a new array of length 10 and filling the array with -1.
// console.log(myArray);


// const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// myArray.fill(0, 2, 5); //fill elements of index from 2 to 4 with 0
// console.log(myArray);


// splice method
// start , delete , insert

// if we want to inser or delete from an Array, we will use splice method

// const myArray = ['item1', 'item2', 'item3'];

// delete , delete method also returns
// myArray.splice(1, 1);
// console.log(myArray);

// insert
// myArray.splice(1, 0, 'inserted item');
// console.log(myArray);

// insert and delete
// myArray.splice(1, 2, "insertedItem1", "insertedItem2");
// console.log(myArray);

// iterables are those on whom we can apply for of loop - string, array are iterables

// array like object - those who have length property and which can be accessed via the index - string

// Sets

// const numbers = new Set(); //syntax of defining set

// const numbers = new Set([1, 2, 3]);
// console.log(numbers);

// const numbers = new Set();

// numbers.add(1); //adds 1 to the set numebers
// numbers.add(5);
// numbers.add('items');
// numbers.add("Sainath");

// console.log(numbers.has(1)); //returns true if 1 is present in the set else returns false

// console.log(numbers);

// items = ['item1', 'item2', 'item3'];
// numbers.add(items); //adds items array to the set numbers
// console.log(numbers);

// for(let number of numbers){
//     console.log(number);
// }; //applying for loop to the set numbers

// //extracting unique elemts from an array

// const myArray = [1, 2, 3, 5, 5, 6, 9, 9];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);

// // finding length of above set
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// };
// console.log(length);

// Maps
// Map also stores data as key value pair
// The difference between object and maps is key can of any type

// const person = new Map(); //syntax of defining map

// person.set('firstName', 'Sainath'); //adds to map
// person.set('age', 7);
// person.set(1, 'one');
// person.set([1, 2, 3], 'onetwothree');
// person.set({1: 'one'}, 'onetwothree');
// console.log(person);
// console.log(person.get('firstName')); //accesing individual items
// console.log(person.get(1));
// // console.log(person.keys()); //printing all keys in the map

// for (let key of person.keys()){
//     console.log(key);
// } // printing all keys

// example

// const person1 = {
//     id : 1,
//     firstName : "Sainath", 
// };

// const extraInfo = new Map();
// extraInfo.set(person1, {age: 8, gender: 'male'});

// console.log(person1.id);
// console.log(extraInfo.get(person1));
// console.log(extraInfo.get(person1).age);

// clone using object.assign

// const obj = {
//     key1 : "value1",
//     key2 : "value2",
// };

// console.log(obj);

// const obj2 = obj;

// console.log(obj2);

// lets add another item to obj

// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2); //obj2 is also updating , if we dont want this to happen we should create obj2 as new object in the memory, we can use spread operator and we can use cloning method mentioned in line number 542

// const obj2 = {...obj};
// const obj2 = Object.assign({}, obj);
// console.log(obj2);

// obj.key3 = "value3";

// console.log(obj);
// console.log(obj2);

// optional chaining

// const user = {
//     firstName : "Sainath",
//     adress : {houseNumber : 1234},
// };

// console.log(user.firstName);
// console.log(user.adress.houseNumber);

// Let suppose that line 554 is not there then line number 558's output will be an error, if we don't want error to display, instead we want to display undefined we can use ?. instead of .

// const user = {
//     firstName : "Sainath",
// };
// console.log(user?.firstName);
// console.log(user?.adress?.houseNumber);

// creating our own methods

// what are methods? - funtion inside object is called a method

// const person = {
//     firstName : "Sainath",
//     age : 21,
//     about : function(){
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//     }
// };

// person.about();

// what if we define method outside and make more use of it :) ?

// function personInfo(){
//     console.log(`person name is ${this.firstName} and person age is ${this.age}`);
// };

// const person1 = {
//     firstName : "Sainath",
//     age : 21,
//     about : personInfo
// };

// const person2 = {
//     firstName : "medha",
//     age : 21,
//     about : personInfo
// };

// const person3 = {
//     firstName : "slaghya",
//     age : 10,
//     about : personInfo
// };

// person2.about();
// person1.about();
// person3.about();

// call, apply, bind methods

// const user1 = {
//     firstName : "sainath",
//     age : 21,
//     about : function() {
//         console.log(this.firstName , this.age)
//     }
// }

// const user2 = {
//     firstName : "sainath",
//     age : 21,
// }

// user1.about.call(user2); // using about in user1 for user2

// other example

// const user1 = {
//     firstName : "sainath",
//     age : 21,
//     about : function(hobby, favSong) {
//         console.log(this.firstName , this.age, hobby, favSong)
//     }
// }

// const user2 = {
//     firstName : "sainath",
//     age : 21,
// }

// user1.about.call(user2, "singing", "None");

//apply
// user1.about.call(user2, ["guitar", "None"]); // passing as array

//bind
// const func = user1.about.bind(user2, ["guitar", "None"]); // bind returns a function

// func();
