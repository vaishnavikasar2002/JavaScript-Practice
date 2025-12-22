// data types 
let a = 10;
console.log(typeof a);

let b = "vaishnavi"
console.log(typeof b);

let c = true;
console.log(typeof c);

let d = -10;
console.log (typeof d);


// operations 
let e = 2;
let f = 5;
let add = e + f;
console.log("add of e and f is: " + add);
let diff = e - f;
console.log("diff of e and f is: " + diff);
let mul = e * f;
console.log("mul of e and f is: " + mul);
let div = e / f;
console.log("div of e and f is: " + div);

//operators precendence 
let x = 5 + 3 * 2; // 5 + 6 = 11
console.log("value of x is: " + x);

//let keyword
let age = 22;
console.log("age is : " + age);

let newAge = age + 1;
console.log("new age is: " + newAge);

let name;
console.log("name is :" + name);

// const keyword
const year = 2025;
const nextYear = year + 1;
console.log("year is :" + year)
console.log("next year is :" + nextYear) //error bec const ahe = cannot be changed

//var keyword = old syntax (used let keyword , var same as let keyword)

// practices qs 
// Q1
let num = 23;
num + 2; //add two = output 23 = 25 ka ynear nhi karn right side la assign nhi kela
console.log("add two is :" + num); 

// Q2
let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3;
console.log("average is :" + avg);

// Assignment operators
let score = 50;
score += 10; // score = score + 10
console.log( score);

// unary op
//preincrement (change then use)
let num1 = 10; //10
let newNum = ++num1; //11
console.log(num1); //11

//post increment (use then change)
let num2 = 10; //10
let newNum2 = num2++; //10
console.log(num2); //11

//practice qs
let num3 = 5; //5
let newNum3 = num3++; //5
let newNum4 = ++num3; //7
console.log(num3); //7

//boolean in js 
let age1 = 18;
let isAdult = true;
console.log("is adult: " + isAdult);
console.log(typeof isAdult);

//strings in js
let firstName = "Vaishnavi";
let lastName = "Kasar";
let fullName = firstName + " " + lastName;
console.log("full name is: " + fullName);
console.log("first character of first name is: " + firstName[0]);
console.log(typeof fullName);
let numStr = "123";
console.log(typeof numStr);
let empty= " ";
console.log(typeof empty);

//string indices
let city = "Pun e";
console.log("first character of city is: " + city[0]);
console.log("second character of city is: " + city[1]);
console.log("third character of city is: " + city[2]);
console.log("fourth character of city is: " + city[3]);
console.log("fourth character of city is: " + city[4]);
console.log("fourth character of city is: " + city[55]);
console.log(city.length);
console.log(city.length-1);
console.log(typeof city);

// concatenation
let str1 = "Hello";
let str2 = "World";
let message = str1 + ", " + str2 + "!";
console.log(message);

//undefined and null
let p;
console.log("value of p is: " + p);
console.log(typeof p);

let q = null;
console.log("value of q is: " + q);
console.log(typeof q);

//PQ
let name1="vaishnavi";
console.log(name1.length);
console.log(name1[0]);
console.log(name1[8]);

let str = "apnacollege"+123;
console.log(str);
console.log(typeof str);

let emp = "";
console.log(emp.length);

let space = " ";
console.log(space.length);