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

