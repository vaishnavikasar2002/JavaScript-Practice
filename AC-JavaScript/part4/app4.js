//for loop
//Qs 1
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

//QS 2
for (let i = 5; i >= 1; i--) {
  console.log(i); //5,4,3,2,1
}

//QS 3
for (let i = 10; i >= 1; i = i - 2) {
  console.log(i); //10,8,6,4,2
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//print odd no
for (let i = 1; i <= 25; i = i + 2) {
  console.log(i);
}
console.log("backwards");
for (let i = 25; i >= 1; i = i - 2) {
  console.log(i);
}

//print even no
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
console.log("backwards");
for (let i = 10; i >= 2; i = i - 2) {
  console.log(i);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//infinite loop (condition always true)
// Q1
// for(let i=1; i>=5;i++){
//     console.log(i)
// }

// Q2
// for(let i=1; ;i++){
//     console.log(i)
// }

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//multiplication table for 5 //Q1
for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}

//Qs 2
// let p = prompt("write your number"); //prompt ne string madhe value ghetli
// p = parseInt(p); //interger madhe convert kela
// for ( let i=p; i<=p*10; i=i+p){
//     console.log(i);
// }

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//nested loop
for (let i = 1; i <= 5; i++) {
  console.log(`outer loop ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//while loop
//Q1
let k = 5;
while (k >= 1) {
  console.log(k);
  k--;
}

//Q2
let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//favorite moive

// let favMoive = "ved";
// let guess = prompt("Guess My Fav Moive");

// while (guess != favMoive) {
//   if (guess == "quit") {
//     console.log("you quit");
//     break;
//   }
//   guess = prompt("Wrong guess.Please try again");
// }
// if (guess == favMoive) {
//   console.log("Congrats!!");
// }

// another way
// let favMoive = "sambhaji";
// let guess = prompt("Guess My Fav Moive");

// while ((guess != favMoive) && (guess != "quit")) {
//   guess = prompt("Wrong guess.Please try again");
// }
// if (guess == favMoive) {
//   console.log("Congrats!!");
// }
// else{
//     console.log("you quit");
// }

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//break keyword
let m = 1;
while (m <= 10) {
  if (m == 5) {
    break;
  }
  console.log(m);
  m++;
}
console.log(`we used break statment at 5`);

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//loops with array //Q1
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// print odd index Q2
let fruit = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 1; i < fruit.length; i = i + 2) {
  console.log(i, fruit[i]);
}

// Q3 print last to first and add to frist "chiku"
let fruitsList = ["mango", "apple", "banana", "litchi", "orange"];
fruitsList.push("chiku");
for (let i = fruitsList.length - 1; i >= 0; i--) {
  console.log(i, fruitsList[i]);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//nested loop with nested arrays
//Qs1
let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder", "flash"],
];
for (let i = 0; i < heroes.length; i++) {
  console.log(i, heroes[i]);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(`j=${j},${heroes[i][j]}`);
  }
}

//Q2
let student = [
  ["aman", 95],
  ["vaishnavi", 90],
  ["chetan", 99],
];
for (let i = 0; i < student.length; i++) {
  console.log(`info of student #${i}`);
  for (let j = 0; j <= student[i].length; j++) {
    console.log(student[i][j]);
  }
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//for of loop = array (individual elements print karnyasathi)
let fruit1 = ["mango", "apple", "banana", "litchi", "orange"];
for (i of fruit1) {
  console.log(i);
}

//for of loop = string (individual characters print karnyasathi)
for (char of "vaishnavi kasar") {
  console.log(char);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//Nested for of loop
let hero = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder", "flash"],
];
for (list of hero) {
  for (name of list) {
    console.log(name);
  }
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

//practices questions
//Qs 1
let arr3 = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] == num) {
    arr3.splice(i, 1);
  }
}
console.log(arr3);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

//Q2
// number la string madhe convert kela .toString() method ne
// mhnje 287152 number just  string "287152" zala
// .length string method use karun total character count (6) zal, mg length milali.
// Pn jr negative number asel trMath.abs(number)
// method use karun number positive kryla lagel tya nantrch toString ani length vaprych

let num3 = 287152;
let count = num3.toString().length;

console.log("Digits count:", count)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

//Qs 3
// let number = 287152;
// let sum = 0;
// let copy1 = number;

// while (copy1 > 0) {
//   digit = copy1 % 10;
//   sum += digit;
//   copy1 = Math.floor(copy1 / 10);
// }
// console.log(sum);


// Q3 same easy method 
// 1. Sum += Number(digit)
    // Sum = sum + Number('2')
    // sum = 0 + 2 
    // 2. sum += Number('8')
    // sum = 2 + 8 ...so on
    // for of loop madhe apan num ha string format ahe tyatun ek ek char ghenar 
    // To char ahe tyala direct add krun chalat nahi, 
    // Mhnun Number() method use kela, he method string or char la number madhe convert krty

let number = 287152;   // number string मध्ये घ्या
let sum = 0;

for (let digit of number.toString()) {
    sum = sum + Number(digit); 
}

console.log("Sum of digits:", sum);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

//Qs4
let n = 7;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Qs5
let arr = [2, 4, 6, 8, 1, 0, 3,55];
let largest = 0;
for (let i = 0; i <= arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(largest);
