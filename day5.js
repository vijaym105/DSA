//Loops part1

// Reverse order printing
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number: "));

// for(let i=n; i>=1; i--){
//     console.log(i);
    
// }

// Printing n numbers
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number: "));

// for(let i=1; i<=n; i++){
//     console.log(i);
    
// }

// Sum of n number
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number: "));
// let acc = 0;
// for(i = 1; i<=n; i++){
//      acc = acc + i;
// }
// console.log(acc); 

// Mul of n Number
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number: "));
// let acc = 1;
// for(i = 1; i<=n; i++){
//      acc *= i;
// }
// console.log(acc); 


// Accept a Range of no and print sum of odd, even no.
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number: "));
// let m = Number(prompt("Enter a 2nd number: "));
// let even = 0;
// let odd = 0;
// if(n>m){
//     let temp = a;
//     n = m;
//     m = temp
// }
// for(i=n; i<=m; i++){
//     if(i % 2 == 0) even += i;
//     else odd += i;
// }
// console.log("Sum of even no: "+ even);
// console.log("Sum of odd no: "+ odd);

// let a = 20;
// let b = 10;

// let temp = a;
// a = b;
// b = temp

// console.log(a,b);


// Print all number of factors 
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number: "));

// for(i=1; i<=n; i++){
//     if(n%i ==0)process.stdout.write(i+" ")
// }
// Better method 
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number: "));

for(let i = 1; i <= n/2; i++){
    if(n % i ==0)process.stdout.write(i+" ")
}
console.log(n);
