console.log("hello");
console.log("hello vaishnavi");

let a = 5;
let b = 44
console.log("sum :" , a+b);

let pencilPrice = 10;
let erasorPrice = 5;

// let output = "The total price is : " + (pencilPrice + erasorPrice) +  " Rupees.";
let output = `the pencilPrice is : ${pencilPrice} RUpees`;
console.log(output); 

//Operators
//comparison op
let c = 18;
console.log(c > 20);

//logical op 
5==5;
console.log(5==5);
console.log(4==5);
console.log(5!=3);

//comparison for non number
"a" > "b"
console.log("a">"b");

'B' < 'd';
console.log('B' < 'd');

//if statement 
//ex 1
let age = 10;
if (age >= 21) {
    console.log("you can marray...");
} // condition false asel tr op print hot nhi 
 
//ex2
let agee = 23;
if (agee >=18) {
    console.log("you can vate");
}

//ex3 
let firstName = "shrddha";
if(firstName == "vaishnavi"){
    console.log("Welcome shrddha");
}

//practices que
// ex 1 = create a traffic light system that shows what to do based on color.

let color = "yellow";

if (color === "red") {
    console.log("Stop");
}
if (color === "yellow") {
    console.log("Slow down");
}
if (color === "green") {
    console.log("Go");
}

// else if 
// ex 1
let weight = 98;
if (weight < 30){
    console.log("you weight is less");
}

else if (weight < 60) {
    console.log("you weight is maintained");
}

else if (weight > 90) {
    console.log("you weight is high");
}

//ex 2
let marks = 26;
if (marks > 80) {
    console.log ("your grade is A");
}
else if (marks >= 60){
    console.log ("your grade is B") ;
}
else if (marks > 40){
    console.log ("your grade is C") ;
}
else if (marks < 30){
    console.log ("your grade is Fail") ;
}

//else statement 
let ageee = 16 ;
if (ageee >=18) {
    console.log("you can vate");
}
else {
    console.log ("you cannot vate");
}

//practices que
let size = "L";
if (size === "XL"){
    console.log("Popcorn price is Rs. 250")
}
else if (size ==="L"){
    console.log("Popcorn price is Rs. 200")
}
else if (size ==="M"){
    console.log("Popcorn price is Rs. 100")
}
else if (size ==="S"){
    console.log("Popcorn price is Rs. 50")
}

//nested if-else
let markss = 99;
if (markss >= 33) {
      console.log("Pass");
      if(markss >= 80){
        console.log("Grade : O");
      } else {
        console.log("Grade : A");
      }
} else {
    console.log("Better luck next time");
}

//logical operators
//ex &&
let marksss = 70;

if (marksss >= 33  && marksss >= 80) {
    console.log("pass");
    console.log("A+");
}

//ex ||
let markssss = 70;

if (!markssss >= 33  || markssss >= 80) {
    console.log("pass");
    console.log("A+");
}

// ex !
let marksssss = 70;

if (!(marksssss <= 33) )   {
    console.log("pass");
    console.log("A+");
}

//practice que 
//ex 1
let strr = 'spple';
if (strr[0] === 'a' && strr.length > 3) {
    console.log("Good String");
} 
else {
    console.log("Not a good string");
} 
     
//ex 2
let num = 12;
if((num%3 === 0) && (num+1 === 15)|| (num-1 === 11)){
    console.log("safe");
} else {
    console.log("unsafe");
}

//switch statement
let button = "bievy";
switch(button) {
    case "Fan" :
    console.log("Stop");
    break;

    case "AC" :
    console.log("Fast");
    break;

    case "Light" :
    console.log("dark");
    break;

    default :
    console.log("Broken Button");
}

//practice que 
let day = 46;
switch(day) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break; 
    case 3 :
        console.log("wednesday");
        break; 
    case 4 :
         console.log("Thursday");
         break;
    case 5 :
        console.log("Friday");
        break; 
    case 6 :
        console.log("saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default :
        console.log("Wrong Number");
}

// Alert
// alert("Java Script part 2");

//prompt 
//ex 1
// prompt ("Enter your Name:");

// ex2 
// let firstNamee = prompt("Enter your First Name :");
// console.log(firstNamee);

//ex 3
// let firstNamee = prompt("Enter your First Name :");
// let lastNamee = prompt("Enter your Last Name :");
// let msg = "Welcome "  +  firstNamee+ " " + lastNamee + "!";
// alert(msg);

//practice Questions part 2 
//ex 1
let number = 20;
if (number % 10 == 0) {
    console.log("Good");
} else {
    console.log ("Bad");
}

//ex 2
let userName = prompt("User Name");
let userAge = prompt("age");
// let msg = userName +" " + "is " + userAge +" " + "years " + "old " + "!" ;
//or
let msg = (`${userName} is ${userAge} years old`)
alert(msg);

//ex 3
let quaeterMonths = 4 ;

switch(quaeterMonths) {
    case 1:
        console.log("January , February , March");
        break;
    case 2 :
        console.log("April , May , June");
        break;
    case 3 :
        console.log("July , August , September")  ;
        break;
    case 4 :
        console.log("October, November, December") ;
        break;
        default: 
        console.log("wrong number");
}

//ex 4
let str = "apples";
if ((str[0] == "a" || start[0] == "A") && (str.length > 5) ) {
    console.log("This string is golden");
} else {
    console.log("This string is not golden");
}

// ex 5
let p = 5;
let q = 18;
let r = 23;

if (p>q) {
    if(p>r){
        console.log(p, "is largrst");
    } else {
        console.log(q, "is largest");
    }
} else {
    if(q> r) {
        console.log(q , "is largest");
    } else {
        console.log(r ,"is largedt");
    }
}

//ex 6
let digit1 = 32;
let digit2 = 267819;
if ((digit1%10)== (digit2%10)){
    console.log ("last digit is 2",267819);
} else {
    console.log ("last digit no is 2", 267819);
}