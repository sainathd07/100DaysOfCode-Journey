// console.log("Hello World");

/*
Everything in between is a comment.
*/

// passing two arguments and multiplying them
// function multiplyNum(a, b) {
//     console.log(a*b);
// }

// multiplyNum(5, 5);


// event handlers
// document.querySelector('html').addEventListener('click', function() {
//   alert('Ouch! Stop poking me!');
// });

// practise

// document.querySelector('html').addEventListener('click', function() {
//     alert('Ouch! You Poked me');
// })

// Adding an image changer

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === '/Images/banner2.png') {
//         myImage.setAttribute('src', '/Images/banner2.png');
//     } else {
//         myImage.setAttribute('src', '/Images/banner.png');
//     }
// }


// Adding a personalized welcome message

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//   let myName = prompt('Please enter your name.');
//   if(!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem('name', myName);
//   localStorage.setItem('name', myName);
//   myHeading.textContent = 'JavaScript is cool, ' + myName;
// }
// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'JavaScript is cool, ' + storedName;
// }

// myButton.onclick = function() {
//   setUserName();
// }

// class

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name, age);
//         this.speed = speed;
//     }

//     run(){
//         return `${this.name} is running at ${this.speed} `;
//     }
// }

// const tommy = new Dog("tommy", 3);
// console.log(tommy.isCute());
// console.log(tommy.run());

// getter and setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName - lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`     
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("sainath", "goud", 21);
console.log(person1.fullName);