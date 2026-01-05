// Math function

// let num = 10.987445
// console.log(num.toFixed(2));

// Compound interest

// let prompt = require("prompt-sync")();

// let p = prompt("Enter the principal amout: ");
// let r = prompt("Enter the rate of interest: ");
// let t = prompt("Enter the time period: ");

// console.log((p* Math.pow(1 + (r/100), t) - p).toFixed(3));


// 3 digit OTP 

// console.log(Math.floor(Math.random()*1000));

//Swappig a number without using any new variable
// let a = 10;
// let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a,b);

// Area of traingle using herons formula
// s =(a+b+c)/2 
// A= sqrt of s*(s-a)*(s-b)*(s-c)

// function traingle(a,b,c){
//     s = (a+ b + c)/2;
//     let A = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     console.log(A);
    
// }
// traingle(3,4,5);


function circle(r){
    let C = 2 - Math.PI - r;
    console.log(C);
     
}

circle(5);

