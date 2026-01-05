// Conditional Statement
// function findGreatest(a, b) {

//Find greatest number among 2
//     if(a>b) {
//         return a;
//     }
//     else{
//         return b;
//     }
// }

//  findGreatest(3,5);

// Even or odd
// function checkEvenOrOdd(num) {
//     if(num % 2 === 0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
    
// }

//  checkEvenOrOdd(4) ;

// Voter verification
// function checkVoterEligibility(name, age) {
//     // Write your logic here
//     if(age >= 18 ){
//         return `${name} is a valid voter.`;
//     }
//     else{
//         return `${name} is not a valid voter.`
//     }
    
// }

//  checkVoterEligibility("Vijay", 20);

// Discount according to price

// let prompt = require('prompt-sync')();
// let amount = Number(prompt("Enter the amount: "));

// dis = 0;

// if(amount > 0 && amount <= 5000 ) dis = 0;
// if(amount > 5000 && amount <= 7000 ) dis = 5;
// if(amount > 7000 && amount <= 9000 ) dis = 10;

// console.log("Your payable amount is : " + (amount - (dis * amount)/100));



function calculateElectricityBill(unit) {

    let price = 0;
    if(unit > 0 && unit <=100) price = 4.2;
    if(unit > 100 && unit <=200) price = 6;
    if(unit > 200 && unit <=400) price = 8;
    if(unit > 400) price = 13;
    
    return ((unit*price).toFixed(1));
    
}

 calculateElectricityBill(30);