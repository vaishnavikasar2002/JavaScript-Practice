console.log("hello vaishnavi");

// let a = vaishnavi;
// let b = pawar;
// console.log("fullname : " ,a + b );

// let pencil = 10;
// let erasor = 7;
// console.log("the total price is :", pencil + erasor, "Repees.");

let p = 10;
let q = 5;
console.log(p+q)

// if statement
// QS1
let age = 8
if(age>18){
   console.log("you can marray");
}
console.log("you cant marray");

// QS2
let light = "green"; 
if(light == "red") {
    console.log(" stop");
}
if(light == "yellow") {
    console.log("slow down");
}
if(light == "green") {
    console.log("go");
}

// Q3
let marks = 55
if(marks > 35) {
    console.log("Pass");
}

// Q4
let username = "admin";
if(username == "admin") {
    console.log("Welcome admin");
}

// Q5
let temp = -1;
if(temp < 0) {
    console.log("yes");
}
  
// else if Q1
let isadult = 8;
if(isadult > 18) {
    console.log("person is an adult")
}
else if(isadult < 18) {
    console.log("person is not an adult")
}

//Q2
let score = 80;
if(score > 50) {
    console.log("pass");
}
else if(score < 50) {
    console.log("Fail");
}

//Q3
let temperature = 20;
if(score > 30) {
    console.log("hot");
}
else if(score < 10) {
    console.log("Cold");
}

// else Q1
let age1 = 33;
if(age1 >=18) {
    console.log("you can vote");
} 
else {
     console.log("you cannot vote");
}

//nested if-else Q1
let num = 90;
if (num >=1 && num <= 100){
    if(num > 50) {
    console.log("Above 50");
} else {
    console.log("Below 50");
}  
}else {
    console.log("Out of")
}

//practice que 
let str = "iloveyou" ;
if((str[0] === "a" ) && (str.length > 3)) {
    console.log("String is good");
} else {
    console.log("String is not good");
}

//Switch case 
let color =  "white";
switch(color) {
    case "red" :
        console.log("its apple color is red");
        break; // break dila nhi tr baki pudhe pn condition excute hota
    case "yellow" :
        console.log("this banana color is yellow");
        break;
    case "green" :
        console.log("this grapes color is green");
        break;
    case "brown" :
        console.log("this chiku color is brown");
        break;
    default :
        console.log("Unknown");
}

//practice que Q5 
let x =23;
let y = 44;
let z = 2;

if(x>y){
    if(x>z){
        console.log("X is greater ");
    } else{
        console.log("Z is greater ")
    }
}else {
    if (y>z){
    console.log("Y is greater ")
} else {
    console.log("Z is  greater")
}
}

// Question (Bonus).Write a program to check if 2 numbers have the same last digit Eg: 66 and 126 have the same last digiti
let number1 = 66; // same last digiti kadayche asel tr 10 ne module karta
let number2 = 126;  
if((number1 % 10) == (number2 % 10)) {
        console.log("last digit of Number1 and Number2");
    }
    else {
        console.log(" wrong digit");
    }